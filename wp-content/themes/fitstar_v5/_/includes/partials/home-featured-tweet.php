<?php
/**
 * Fitstar
 */

$post = $tweet;
setup_postdata($post);

?>

	<div class="tweet bg-white notranslate">
		<div class="avatar-wrapper">
			<span class="icon-twitter"></span>
			<span class="avatar">
				<img src="<?=get_field('twitter_avatar_url')?>" />
			</span>
		</div>
		<?php the_content(); ?>
	</div>

<?php

wp_reset_postdata();