

<header class="global bg-white <?php if (is_page_template('page-promo.php') ) { echo 'promo '; } ?>">
    <div id="cookie-notice" hidden>

        <a href="javascript:void(0)" class="close-button icon-close" id="close-announcement"></a>

        <div class="row">
            <div class="columns xsmall-12">
                <p>This site uses cookies (no, not that kind, #cheatday). By continuing to browse, you agree to our use of cookies on the site. <a href="http://fitstar.com/privacy-policy/" target="_blank">Learn more.</a></p>
            </div>

        </div>

    </div>

    <div class="row">
		<div class="nav-container columns large-12">

			<a class="brand" href="/">
				<img src="<?php echo get_template_directory_uri(); ?>/_/images/fitstar-logo-dark.svg" alt="Fitstar. By Fitbit.">
			</a>

			<?php if (is_page_template('page-promo.php')): ?>
				<a class="sign-up button-callout" href="<?= promo_page_cta_link(get_field('header_btn_link')); ?>"><?= get_field('header_btn'); ?></a>
			<?php elseif (is_page_template('page-signup.php')): ?>
				<a id="signup-button" class="sign-up button-callout smooth-scroll" href="#signup-anchor">Sign Up</a>
			<?php elseif (is_page_template('page-promo-blaze.php')): ?>
				<a class="button-callout sign-up icon-fitbit tablet" href="https://app.fitstar.com/users/new/fitbitlogin">Sign up with your fitbit account</a>
				<a class="button-callout sign-up icon-fitbit mobile" href="https://app.fitstar.com/users/new/fitbitlogin">Sign up</a>
			<?php else: ?>
			<nav>

					<?php wp_nav_menu('menu=Main Menu'); ?>
					<ul class="clearfix">
						<!-- <li class="hide-from-ios"><a href="<?=ftw_log_in_url()?>">Log In</a></li> -->
						<li class=""><a href="<?=ftw_sign_up_url()?>" class="button-callout">Sign Up</a></li>
					</ul>

			</nav>
			<?php endif; ?>
		</div>

	</div>

	<div id="inner-video-player" class="video-player">
		<a href="#" class="icon-close"><span class="hidden">Close</span></a>
		<div class="player">

		</div>
	</div>

	<?php if (has_action('fitstar_header_form')): ?>
		<div id="inner-header-form">
			<a href="#" class="icon-close"><span class="hidden">Close</span></a>
			<div class="header-form">
				<?php do_action('fitstar_header_form'); ?>
			</div>
		</div>
	<?php endif; ?>
</header>

<?php if (!( is_page_template('page-promo.php') || is_page_template('page-promo-blaze.php') || is_page_template('page-signup.php')) ) { ?>
	<div class="offset-container"<?php if (is_page_template('page-homepage.php')) { ?> id="top"<?php }; ?>>
<?php }; ?>
