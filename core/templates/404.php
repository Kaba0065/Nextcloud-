<?php
/** @var array $_ */
/** @var \OCP\IL10N $l */
/** @var \OCP\Defaults $theme */
// @codeCoverageIgnoreStart
if (!isset($_)) {//standalone  page is not supported anymore - redirect to /
	require_once '../../lib/base.php';

	$urlGenerator = \OC::$server->get(\OCP\IURLGenerator::class);
	header('Location: ' . $urlGenerator->getAbsoluteURL('/'));
	exit;
}
// @codeCoverageIgnoreEnd
?>
<?php if (isset($_['content'])): ?>
	<?php print_unescaped($_['content']) ?>
<?php else: ?>
	<div class="body-login-container update">
		<div class="icon-big icon-search"></div>
		<h2><?php p($l->t('Page not found')); ?></h2>
		<p class="infogroup"><?php p($l->t('The page could not be found on the server or you may not be allowed to view it.')); ?></p>
		<p><a class="button primary" href="<?php p(\OC::$server->get(\OCP\IURLGenerator::class)->linkTo('', 'index.php')) ?>">
			<?php p($l->t('Back to %s', [$theme->getName()])); ?>
		</a></p>
	</div>
<?php endif; ?>
