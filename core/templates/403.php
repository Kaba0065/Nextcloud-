<?php

use OCP\IURLGenerator;

// @codeCoverageIgnoreStart
if (!isset($_)) {//standalone  page is not supported anymore - redirect to /
	require_once '../../lib/base.php';

	$urlGenerator = \OC::$server->get(IURLGenerator::class);
	header('Location: ' . $urlGenerator->getAbsoluteURL('/'));
	exit;
}
// @codeCoverageIgnoreEnd
?>
<div class="guest-box">
	<h2><?php p($l->t('Access forbidden')); ?></h2>
		<p class='hint'><?php if (isset($_['message'])) {
			p($_['message']);
		}?></p>
</ul>
