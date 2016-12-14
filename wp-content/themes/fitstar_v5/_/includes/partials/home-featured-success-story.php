<?php
/**
 * Fitstar
 */

$post = $success_story;
setup_postdata($post);

?>

	<div class="success bg-white <?php if ($image = get_field('secondary_image')) : ?>has-two-images<?php endif; ?>">

		<a href="https://twitter.com/hashtag/FitStarStories" class="ribbon-tag">#FitStarStories</a>
		
		<?php if ($image = get_field('secondary_image')) : ?>
			<div class="image-container has-two">
				<div class="headshot double-headshot first-headshot">
					<?php if ($image = get_field('headshot')): ?>
						<img class="notranslate_alt notranslate_title" src="<?php echo $image['sizes']['square150']; ?>" alt="<?=htmlspecialchars(get_sub_field('name').' from  '.the_field("location"))?>" />
					<?php endif; ?>
				</div>
				<div class="headshot double-headshot second-headshot">
				<?php if ($image = get_field('secondary_image')): ?>
					<img class="notranslate_alt notranslate_title" src="<?php echo $image['sizes']['square150']; ?>" alt="<?=htmlspecialchars(get_sub_field('name').' from  '.the_field("location"))?>" />
				<?php endif; ?>
				</div>
			</div>
		<?php else:  ?>
			<div class="image-container has-one">
				<div class="headshot single-headshot">
				<?php if ($image = get_field('headshot')): ?>
					<img class="notranslate_alt notranslate_title" src="<?php echo $image['sizes']['square150']; ?>" alt="<?=htmlspecialchars(get_sub_field('name').' from  '.the_field("location"))?>" />
				<?php endif; ?>
				</div>
			</div>
		<?php endif; ?>

		<p class="gamma notranslate"><?php the_title(); ?></p>
		<a class="read-more" href="<?php the_permalink(); ?>">Read Story</a>
	</div>

<?php wp_reset_postdata(); ?>