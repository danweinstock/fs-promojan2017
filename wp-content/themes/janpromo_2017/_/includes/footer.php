	<footer class="global">
		<div class="footer-content">
			<div class="row">
				<div class="columns large-2">
					<a class="brand large-screen-logo" href="/">
						<img src="<?php echo get_template_directory_uri(); ?>/_/images/logos/logo-fitstar-white.svg" alt="Fitstar. By Fitbit.">
					</a>
				</div>
				<div class="columns small-12 large-5 footer-menu">
					<?php wp_nav_menu('menu=Footer Menu - FitStar'); ?>
				</div>
				<div class="columns small-12 large-5 footer-downloads">
					<h6>Download</h6>
					<a href="https://itunes.apple.com/app/apple-store/id535640259?pt=1332222&ct=website%20homepage&mt=8" class="download-app-store small">
						<span hidden>Download on the AppStore</span>
					</a>
					<a href="https://play.google.com/store/apps/details?id=com.fitstar.pt&referrer=utm_source%3Dwebsite%26utm_content%3Dhomepage" class="download-play-store small">
						<span hidden>Get it on Google Play</span>
					</a>
					<div class="footer-social">
						<h6>Social</h6>
						<nav>
							<?php wp_nav_menu('menu=Footer Menu - Connect'); ?>
						</nav>
					</div>
				</div>
				
			</div>
		</div>
		<div class="copyright">
			<div class="row">
				<div class="columns small-12">
					<div class="columns small-12">
					<a class="brand small-screen-logo" href="/">
						<img src="<?php echo get_template_directory_uri(); ?>/_/images/logos/logo-fitstar-white.svg" alt="Fitstar. By Fitbit.">
					</a>
					</div>
					<p>Copyright &copy; <?php echo date("Y") ?> Fitbit, Inc. All Rights Reserved</p>
					<ul>
						<li><a href="/terms-of-use/">Terms of Use</a></li>
						<li><a href="/privacy-policy/">Privacy Policy</a></li>
						<li>
							<span class="lang-select">
	                            <label for="footer-lang-select">
	                                Language:
	                            	<span class="select-wrap">
	                            		<?=fitstar_language_selector('footer-lang-select'); ?>
	                            	</span>
	                            </label>
	                        </span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div><!--offset-container-->