<section id="success-stories">
	<div class="row">
		<div class="columns large-5 large-push-1 large-uncentered large-text-left medium-10 medium-centered medium-text-center small-12 small-text-center">
			<a class="ribbon-tag" href="https://twitter.com/hashtag/FitStarStories">#FitStarStories</a>

			<h2>FitStar Success Stories</h2>

			<p>FitStar Personal Trainer works. Really. Have a look through our success stories and discover 
				an amazing source of  inspiration from people just like you.</p>

			<p><a href="/category/inspiration/">See All Of Our Success Stories</a></p>
		</div>

		<?php $query = query_success_stories(3); if ($query->have_posts()): ?>
		<div class="columns large-6 medium-12 small-12 text-center">
			<div class="row">
				<?php while ( $query->have_posts() ) : $query->the_post(); ?>
				<div class="columns large-4 medium-4 small-4">
					<a href="<?php the_permalink(""); ?>">
						<div class="headshot icon-right-arrow-large">
						<?php if ($image = get_field('headshot')): ?>
							<img src="<?php echo $image['sizes']['square150']; ?>" alt="<?=htmlspecialchars(get_sub_field('name').' from  '.the_field("location"))?>" />
						<?php endif; ?>
						</div>
						<h6 class="notranslate"><?php the_field("name"); ?></h6>
						<p><?php the_field("location"); ?></p>
					</a>
				</div>
				<?php endwhile; wp_reset_postdata(); ?>
			</div>
		</div>
		<?php endif; ?>				
	</div>
</section>