<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Joas Schilling <coding@schilljs.com>
 * @author Lukas Reschke <lukas@statuscode.ch>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Thomas Müller <thomas.mueller@tmit.eu>
 * @copyright Copyright (c) 2017, Arne Hamann (<kontakt-github@arne.email>)
 *
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */

namespace OC\Mail;

use OCP\Mail\IAttachment;
use OCP\Mail\IEMailTemplate;
use OCP\Mail\IMessage;
use Swift_Message;

/**
 * Class Message provides a wrapper around SwiftMail
 *
 * @package OC\Mail
 */
class Message implements IMessage {
    /** @var Swift_Message */
    private $swiftMessage;

    /** @var array */
    private $toFingerprints = array();

    /** @var array */
    private $ccFingerprints = array();

    /** @var array */
    private $bccFingerprints = array();

    /** @var array */
    private $fromFingerprints = array();

    /** @var bool */
    private $signed;

    /** @var bool */
    private $encrypted;

    /**
     * @param Swift_Message $swiftMessage
     */
    public function __construct(Swift_Message $swiftMessage) {
        $this->swiftMessage = $swiftMessage;
        $this->toFingerprints = array();
        $this->ccFingerprints = array();
        $this->bccFingerprints = array();
        $this->fromFingerprints = array();

        $this->encrypted = FALSE;
        $this->signed = FALSE;


    }

    /**
     * @param IAttachment $attachment
     * @return $this
     * @since 13.0.0
     */
    public function attach(IAttachment $attachment) {
        /** @var Attachment $attachment */
        $this->swiftMessage->attach($attachment->getSwiftAttachment());
        return $this;
    }

    /**
     * SwiftMailer does currently not work with IDN domains, this function therefore converts the domains
     * FIXME: Remove this once SwiftMailer supports IDN
     *
     * @param array $addresses Array of mail addresses, key will get converted
     * @return array Converted addresses if `idn_to_ascii` exists
     */
    protected function convertAddresses($addresses) {
        if (!function_exists('idn_to_ascii')) {
            return $addresses;
        }

        $convertedAddresses = array();

        foreach ($addresses as $email => $readableName) {
            if (!is_numeric($email)) {
                list($name, $domain) = explode('@', $email, 2);
                $domain = idn_to_ascii($domain, 0, INTL_IDNA_VARIANT_UTS46);
                $convertedAddresses[$name . '@' . $domain] = $readableName;
            } else {
                list($name, $domain) = explode('@', $readableName, 2);
                $domain = idn_to_ascii($domain, 0, INTL_IDNA_VARIANT_UTS46);
                $convertedAddresses[$email] = $name . '@' . $domain;
            }
        }

        return $convertedAddresses;
    }

    /**
     * Set the from address of this message.
     *
     * If no "From" address is used \OC\Mail\Mailer will use mail_from_address and mail_domain from config.php
     *
     * @param array $addresses Example: array('sender@domain.org', 'other@domain.org' => 'A name')
     * @return $this
     */
    public function setFrom(array $addresses, array $fingerprints = []) {
        $addresses = $this->convertAddresses($addresses);
        $this->fromFingerprints = $fingerprints;
        if (count($fingerprints) === 1 && count($addresses) === 1 ){
        	$from = key($addresses);
        	if (is_numeric($from)){
        		$from = $addresses[$from];
			}
			$gpg = \OC::$server->getGpg();
        	$keydataRaw = $gpg->export($fingerprints[0]);
        	$keydata = str_replace('-----END PGP PUBLIC KEY BLOCK-----','',str_replace('-----BEGIN PGP PUBLIC KEY BLOCK-----', '', $keydataRaw));
        	$keydata = trim($keydata);
			$this->swiftMessage->getHeaders()->addParameterizedHeader('Autocrypt', '' ,['addr' => $from, 'prefer-encrypt' => 'mutual', 'keydata' => $keydata] );


			$keyattach = \OC::$server->getMailer()->createAttachment($keydataRaw,"public.asc");
			$this->attach($keyattach);
        }
        $this->swiftMessage->setFrom($addresses);
        return $this;
    }

    /**
     * Get the from address of this message.
     *
     * @return array
     */
    public function getFrom() {
        return $this->swiftMessage->getFrom();
    }

    /**
     * Get the from fingerprints of this message.
     *
     * @return array
     */
    public function getFromFingerprints() {
        return $this->fromFingerprints;
    }


    /**
     * Set the Reply-To address of this message
     *
     * @param array $addresses
     * @return $this
     */
    public function setReplyTo(array $addresses) {
        $addresses = $this->convertAddresses($addresses);

        $this->swiftMessage->setReplyTo($addresses);
        return $this;
    }

    /**
     * Returns the Reply-To address of this message
     *
     * @return array
     */
    public function getReplyTo() {
        return $this->swiftMessage->getReplyTo();
    }

    /**
     * Set the to addresses of this message.
     *
     * @param array $recipients Example: array('recipient@domain.org', 'other@domain.org' => 'A name')
     * @return $this
     */
    public function setTo(array $recipients, array $fingerprints = []) {
        $recipients = $this->convertAddresses($recipients);

        $this->swiftMessage->setTo($recipients);
        $this->toFingerprints = $fingerprints;
        return $this;
    }

    /**
     * Get the to address of this message.
     *
     * @return array
     */
    public function getTo() {
        return $this->swiftMessage->getTo();
    }

    /**
     * Get the to Fingerprints of this message.
     *
     * @return array
     */
    public function getToFingerprints() {
        return $this->toFingerprints;
    }

    /**
     * Set the CC recipients of this message.
     *
     * @param array $recipients Example: array('recipient@domain.org', 'other@domain.org' => 'A name')
     * @return $this
     */
    public function setCc(array $recipients, array $fingerprints = []) {
        $recipients = $this->convertAddresses($recipients);

        $this->swiftMessage->setCc($recipients);
        $this->ccFingerprints = $fingerprints;
        return $this;
    }

    /**
     * Get the cc address of this message.
     *
     * @return array
     */
    public function getCc() {
        return $this->swiftMessage->getCc();
    }

    /**
     * Get the cc Fingerprints of this message.
     *
     * @return array
     */
    public function getCCFingerprints() {
        return $this->ccFingerprints;
    }

    /**
     * Set the BCC recipients of this message.
     *
     * @param array $recipients Example: array('recipient@domain.org', 'other@domain.org' => 'A name')
     * @return $this
     */
    public function setBcc(array $recipients, array $fingerprints = []) {
        $recipients = $this->convertAddresses($recipients);

        $this->swiftMessage->setBcc($recipients);
        $this->bccFingerprints = $fingerprints;
        return $this;
    }

    /**
     * Get the Bcc address of this message.
     *
     * @return array
     */
    public function getBcc() {
        return $this->swiftMessage->getBcc();
    }

    /**
     * Get the Bcc Fingerprints of this message.
     *
     * @return array
     */
    public function getBccFingerprints() {
        return $this->bccFingerprints;
    }

    /**
     * Set the subject of this message.
     *
     * @param $subject
     * @return $this
     */
    public function setSubject($subject) {
        $this->swiftMessage->setSubject($subject);
        return $this;
    }

    /**
     * Get the from subject of this message.
     *
     * @return string
     */
    public function getSubject() {
        return $this->swiftMessage->getSubject();
    }

    /**
     * Set the plain-text body of this message.
     *
     * @param string $body
     * @return $this
     */
    public function setPlainBody($body) {
        $this->swiftMessage->setBody($body);
        return $this;
    }

    /**
     * Get the plain body of this message.
     *
     * @return string
     */
    public function getPlainBody() {
        return $this->swiftMessage->getBody();
    }

    /**
     * Set the HTML body of this message. Consider also sending a plain-text body instead of only an HTML one.
     *
     * @param string $body
     * @return $this
     */
    public function setHtmlBody($body) {
        $this->swiftMessage->addPart($body, 'text/html');
        return $this;
    }


    /**
     * Get's the underlying SwiftMessage
     *
     * @return Swift_Message
     */
    public function getSwiftMessage() {
        return $this->swiftMessage;
    }

    /**
     * @param string $body
     * @param string $contentType
     * @return $this
     */
    public function setBody($body, $contentType) {
        $this->swiftMessage->setBody($body, $contentType);
        return $this;
    }

    /**
     * @param IEMailTemplate $emailTemplate
     * @return $this
     */
    public function useTemplate(IEMailTemplate $emailTemplate) {
        $this->setSubject($emailTemplate->renderSubject());
        $this->setPlainBody($emailTemplate->renderText());
        $this->setHtmlBody($emailTemplate->renderHtml());
        return $this;
    }

	/**
	 *
	 * @return string
	 */
	private function messageContentToString() {
		$originalMessage = clone $this->swiftMessage;
		$originalMessage->getHeaders()->remove('Message-ID');
		$originalMessage->getHeaders()->remove('Date');
		$originalMessage->getHeaders()->remove('Subject');
		$originalMessage->getHeaders()->remove('MIME-Version');
		$originalMessage->getHeaders()->remove('To');
		$originalMessage->getHeaders()->remove('From');
		$originalMessage->getHeaders()->remove('CC');
		$originalMessage->getHeaders()->remove('Bcc');
		$messageString = $originalMessage->toString();

		$lines = preg_split('/(\r\n|\r|\n)/',trim($messageString));
		$lines_count = count($lines);
		for ($i=0; $i < $lines_count; $i++) {
			$lines[$i] = rtrim($lines[$i])."\r\n";
		}
		// Remove excess trailing newlines (RFC3156 section 5.4)
		return rtrim(implode('',$lines))."\r\n";

	}

    /**
     * GPG sign the Message
     * @param IGpg $gpg
     * @return $this
     */
    public function sign($gpg = null) {
        if ($this->signed) {
            return $this;
        }
        if ($this->encrypted) {
            /* encrypted Messages cannot be signed*/
            return $this;
        }
        $sign_fingerprints = $this->getFromFingerprints();
        if($gpg === null){
			$gpg = \OC::$server->getGpg();
		}

		$signedBody = $this->messageContentToString();
		$signature = $gpg->sign($sign_fingerprints,$signedBody);

        $this->swiftMessage->setEncoder(new \Swift_Mime_ContentEncoder_RawContentEncoder);
        $this->swiftMessage->setChildren(array());
		$this->swiftMessage->setBoundary('_=_swift_v4_'.time().'_'.md5(getmypid().mt_rand().uniqid('', true)).'_=_');

		$this->swiftMessage->getHeaders()->get('Content-Type')->setValue('multipart/signed');
        $this->swiftMessage->getHeaders()->get('Content-Type')->setParameters(array(
            'micalg' => "pgp-sha256",
            'protocol' => 'application/pgp-signature',
            'boundary' => $this->swiftMessage->getBoundary(),
        ));

        //Swiftmailer is automatically changing content type and this is the hack to prevent it
        $body = <<<EOT

This is an OpenPGP/MIME signed message (RFC 4880 and 3156)

--{$this->swiftMessage->getBoundary()}
$signedBody
--{$this->swiftMessage->getBoundary()}
Content-Type: application/pgp-signature; name="signature.asc"
Content-Description: OpenPGP digital signature
Content-Disposition: attachment; filename="signature.asc"

$signature

--{$this->swiftMessage->getBoundary()}--
EOT;
        $this->swiftMessage->setBody($body);
		$this->swiftMessage->getHeaders()->removeAll('Content-Transfer-Encoding');

        $this->signed = TRUE;
        return $this;
    }

    /**
     * GPG encrypt the Message
     *
     * @return $this
     */
    public function encrypt($gpg = null) {
        if ($this->signed) {
            return $this;
        }
        if ($this->encrypted) {
            /* encrypted Messages cannot be signed*/
            return $this;
        }
		if($gpg === null){
			$gpg = \OC::$server->getGpg();
		}
        $encrypt_fingerprints = $this->getToFingerprints() + $this->getCCFingerprints() + $this->getBccFingerprints();


		$encryptedBody = $this->messageContentToString();
		$encryptedBody = $gpg->encrypt($encrypt_fingerprints,$encryptedBody);

		$this->swiftMessage->setChildren(array());
		$this->swiftMessage->setBoundary('_=_swift_v4_'.time().'_'.md5(getmypid().mt_rand().uniqid('', true)).'_=_');

		$this->swiftMessage->setEncoder(new \Swift_Mime_ContentEncoder_RawContentEncoder);
        $this->swiftMessage->getHeaders()->get('Content-Type')->setValue('multipart/encrypted');
        $this->swiftMessage->getHeaders()->get('Content-Type')->setParameters(array(
            'protocol' => 'application/pgp-encrypted',
            'boundary' => $this->swiftMessage->getBoundary(),
        ));


        $body = <<<EOT
This is an OpenPGP/MIME encrypted message (RFC 4880 and 3156)
--{$this->swiftMessage->getBoundary()}
Content-Type: application/pgp-encrypted
Content-Description: PGP/MIME version identification

Version: 1

--{$this->swiftMessage->getBoundary()}
Content-Type: application/octet-stream; name="encrypted.asc"
Content-Description: OpenPGP encrypted message
Content-ID: <0>
Content-Disposition: inline; filename="encrypted.asc"

$encryptedBody

--{$this->swiftMessage->getBoundary()}--
EOT;
        $this->swiftMessage->setBody($body);
        $this->swiftMessage->getHeaders()->removeAll('Content-Transfer-Encoding');
        $this->encrypted = TRUE;
        return $this;
    }

    /**
     * GPG encrypt and sign the Message
     *
     * @return $this
     */
    public function encryptsign($gpg = null) {
        if ($this->signed) {
            return $this;
        }
        if ($this->encrypted) {
            /* encrypted Messages cannot be signed*/
            return $this;
        }
		if($gpg === null){
			$gpg = \OC::$server->getGpg();
		}
        $sign_fingerprints = $this->getFromFingerprints();
        $encrypt_fingerprints = $this->getToFingerprints() + $this->getCCFingerprints() + $this->getBccFingerprints();

		$signedBody = $this->messageContentToString();
		$signature = $gpg->sign($sign_fingerprints,$signedBody);

        $this->swiftMessage->setEncoder(new \Swift_Mime_ContentEncoder_RawContentEncoder);
        $this->swiftMessage->setChildren(array());
		$this->swiftMessage->setBoundary('_=_swift_v4_'.time().'_'.md5(getmypid().mt_rand().uniqid('', true)).'_=_');
		$this->swiftMessage->getHeaders()->get('Content-Type')->setValue('multipart/signed');
        $this->swiftMessage->getHeaders()->get('Content-Type')->setParameters(array(
            'micalg' => "pgp-sha256",
            'protocol' => 'application/pgp-signature',
            'boundary' => $this->swiftMessage->getBoundary(),
        ));



        //Swiftmailer is automatically changing content type and this is the hack to prevent it
        $body = <<<EOT

This is an OpenPGP/MIME signed message (RFC 4880 and 3156)
--{$this->swiftMessage->getBoundary()}
$signedBody
--{$this->swiftMessage->getBoundary()}
Content-Type: application/pgp-signature; name="signature.asc"
Content-Description: OpenPGP digital signature
Content-Disposition: attachment; filename="signature.asc"

$signature

--{$this->swiftMessage->getBoundary()}--
EOT;


        $this->swiftMessage->getHeaders()->removeAll('Content-Transfer-Encoding');

        $this->signed = TRUE;
        $signed = sprintf("%s%s",$this->swiftMessage->getHeaders()->get('Content-Type')->toString(),$body);
        $encryptedBody = $gpg->encrypt($encrypt_fingerprints,$signed);

        $this->swiftMessage->getHeaders()->get('Content-Type')->setValue('multipart/encrypted');
        $this->swiftMessage->getHeaders()->get('Content-Type')->setParameters(array(
            'protocol' => 'application/pgp-encrypted',
            'boundary' => $this->swiftMessage->getBoundary()
        ));

        $body = <<<EOT
This is an OpenPGP/MIME encrypted message (RFC 4880 and 3156)
--{$this->swiftMessage->getBoundary()}
Content-Type: application/pgp-encrypted
Content-Description: PGP/MIME version identification

Version: 1

--{$this->swiftMessage->getBoundary()}
Content-Type: application/octet-stream; name="encrypted.asc"
Content-Description: OpenPGP encrypted message
Content-ID: <0>
Content-Disposition: inline; filename="encrypted.asc"

$encryptedBody

--{$this->swiftMessage->getBoundary()}--
EOT;
        $this->swiftMessage->setBody($body);
        $this->swiftMessage->getHeaders()->removeAll('Content-Transfer-Encoding');
        $this->encrypted = TRUE;
        return $this;
    }
}
