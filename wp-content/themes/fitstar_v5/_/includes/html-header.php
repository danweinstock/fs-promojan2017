<!DOCTYPE HTML>
<!--[if IE 9]>
<html class="ie9 no-js <?php echo apply_filters('html_class', '') ?>" lang="en">
<![endif]-->
<!--[if gt IE 9]>
<html class="no-js <?php echo apply_filters('html_class', '') ?>" lang="en">
<![endif]-->
	<head>
		<script src="//cdn.optimizely.com/js/1120090038.js"></script>

		<?php if (no_translate_title()) {?><!-- SL:start:notranslate --><?php } ?>
			<title><?php wp_title( '|' ); ?></title>
		<?php if (no_translate_title()) {?><!-- SL:end:notranslate --><?php } ?>

		<meta charset="<?php bloginfo( 'charset' ); ?>" />
	  	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui" />

        <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/modernizr.js"></script>

		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
		<link rel="shortcut icon" href="/favicon.ico"/>

		<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/801118/6876772/css/fonts.css" />

		<?php if (is_page_template("page-home.php")) : ?>
		<!--[if gte IE 9]>
		<style type="text/css">
			.gradient {
				filter: none;
			}
		</style>
		<![endif]-->
		<?php endif; ?>


		<?php if (no_translate_title()) {?><!-- SL:start:notranslate --><?php } ?>
			<?php wp_head(); ?>
		<?php if (no_translate_title()) {?><!-- SL:end:notranslate --><?php } ?>

		<?php if(is_page_template('page-app.php') || is_page_template('page-homepage.php')): ?>
			<script type="text/javascript">
			jwplayer.key="okOnx0GUEhMaXaNHsH0EOhQVvQcG8JoWyiVuZA==";
			</script>
		<?php endif; ?>
	</head>
	<body <?php body_class(); ?>>
	<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/stats.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
		  new FitstarStatsTracker("<?php the_field('floodlight_category'); ?>");
		});
	</script>
	<!-- Google Tag Manager -->
	<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KGMXLG"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-KGMXLG');</script>
	<!-- End Google Tag Manager -->
