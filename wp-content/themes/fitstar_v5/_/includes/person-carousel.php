<div class="carousel-people">
	<!-- Data On Page Load -->
	<div class="data">
		<?php if( have_rows('data_stats_1') ):
			while ( have_rows('data_stats_1') ) : the_row();
			if(get_sub_field("stat_text_1") == "Steps") {
				$steps = get_sub_field("stat_number_1");
			}
			if(get_sub_field("stat_text_1") == "Calories") {
				$calories = get_sub_field("stat_number_1");
			}
			if(get_sub_field("stat_text_1") == "Minutes") {
				$minutes = get_sub_field("stat_number_1");
			}
			endwhile;
		endif;	
		?>
		<div class="steps">
			<span><?php echo $steps; ?></span>
			<h6><i class="icon-steps"></i> steps</h6>
		</div>
		<div class="calories">
			<span><?php echo $calories; ?></span>
			<h6><i class="icon-teardrop"></i> calories</h6>
		</div>
		<div class="minutes">
			<span><?php echo $minutes; ?></span>
			<h6><i class="icon-clock"></i> minutes</h6>
		</div>
	</div>

	<!-- People -->
	<ul class="people">
		<li class="person1 active" 
			<?php if( have_rows('levels_1') ):
			    while ( have_rows('levels_1') ) : the_row();
			    	if(get_sub_field('level_type_1') == "Cardio level") {
			    		echo 'stat-cardio="' . get_sub_field('level_number_1') . '"';
			    	}

			    	if(get_sub_field('level_type_1') == "Core level") {
			    		echo 'stat-core="' . get_sub_field('level_number_1') . '"';
			    	}
			    	if(get_sub_field('level_type_1') == "Legs level") {
			    		echo 'stat-legs="' . get_sub_field('level_number_1') . '"';
			    	}
			    	if(get_sub_field('level_type_1') == "Arms and shoulders level") {
			    		echo 'stat-arms="' . get_sub_field('level_number_1') . '"';
			    	}
			    	if(get_sub_field('level_type_1') == "Chest level") {
			    		echo 'stat-chest="' . get_sub_field('level_number_1') . '"';
			    	}
			    	if(get_sub_field('level_type_1') == "Back level") {
			    		echo 'stat-back="' . get_sub_field('level_number_1') . '"';
			    	}
			    endwhile;
		    endif; ?>
		    <?php if( have_rows('data_stats_1') ):
		    	while ( have_rows('data_stats_1') ): the_row();
		    		if(get_sub_field('stat_text_1') == "Steps") {
		    			echo 'data-steps="' . get_sub_field('stat_number_1') . '"';
		    		}
		    		if(get_sub_field('stat_text_1') == "Calories") {
		    			echo 'data-calories="' . get_sub_field('stat_number_1') . '"';
		    		}
		    		if(get_sub_field('stat_text_1') == "Minutes") {
		    			echo 'data-minutes="' . get_sub_field('stat_number_1') . '"';
		    		}
		    	endwhile;
		    endif; ?>> 	
		    <?php $featuredImage1 = get_field("featured_image_1") ?>
			<div class="graphic" style="background:url(<?php echo $featuredImage1['url']; ?>) no-repeat top center">			
				<div style="background:url(<?php echo $featuredImage1['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage1['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage1['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage1['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage1['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage1['url']; ?>) no-repeat top center"></div>
			</div>
			
		</li>
		<li class="person2" 
			<?php if( have_rows('levels_2') ):
			    while ( have_rows('levels_2') ) : the_row();
			    	if(get_sub_field('level_type_2') == "Cardio level") {
			    		echo 'stat-cardio="' . get_sub_field('level_number_2') . '"';
			    	}

			    	if(get_sub_field('level_type_2') == "Core level") {
			    		echo 'stat-core="' . get_sub_field('level_number_2') . '"';
			    	}
			    	if(get_sub_field('level_type_2') == "Legs level") {
			    		echo 'stat-legs="' . get_sub_field('level_number_2') . '"';
			    	}
			    	if(get_sub_field('level_type_2') == "Arms and shoulders level") {
			    		echo 'stat-arms="' . get_sub_field('level_number_2') . '"';
			    	}
			    	if(get_sub_field('level_type_2') == "Chest level") {
			    		echo 'stat-chest="' . get_sub_field('level_number_2') . '"';
			    	}
			    	if(get_sub_field('level_type_2') == "Back level") {
			    		echo 'stat-back="' . get_sub_field('level_number_2') . '"';
			    	}
			    endwhile;
		    endif; ?> 
		    <?php if( have_rows('data_stats_2') ):
		    	while ( have_rows('data_stats_2') ): the_row();
		    		if(get_sub_field('stat_text_2') == "Steps") {
		    			echo 'data-steps="' . get_sub_field('stat_number_2') . '"';
		    		}
		    		if(get_sub_field('stat_text_2') == "Calories") {
		    			echo 'data-calories="' . get_sub_field('stat_number_2') . '"';
		    		}
		    		if(get_sub_field('stat_text_2') == "Minutes") {
		    			echo 'data-minutes="' . get_sub_field('stat_number_2') . '"';
		    		}
		    	endwhile;
		    endif; ?>> 	
		    	<?php $featuredImage2 = get_field("featured_image_2") ?>
			<div class="graphic" style="background:url(<?php echo $featuredImage2['url']; ?>) no-repeat top center">
				<div style="background:url(<?php echo $featuredImage2['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage2['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage2['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage2['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage2['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage2['url']; ?>) no-repeat top center"></div>

			</div>
		</li>
		<li class="person3" 
			<?php if( have_rows('levels_3') ):
			    while ( have_rows('levels_3') ) : the_row();
			    	if(get_sub_field('level_type_3') == "Cardio level") {
			    		echo 'stat-cardio="' . get_sub_field('level_number_3') . '"';
			    	}

			    	if(get_sub_field('level_type_3') == "Core level") {
			    		echo 'stat-core="' . get_sub_field('level_number_3') . '"';
			    	}
			    	if(get_sub_field('level_type_3') == "Legs level") {
			    		echo 'stat-legs="' . get_sub_field('level_number_3') . '"';
			    	}
			    	if(get_sub_field('level_type_3') == "Arms and shoulders level") {
			    		echo 'stat-arms="' . get_sub_field('level_number_3') . '"';
			    	}
			    	if(get_sub_field('level_type_3') == "Chest level") {
			    		echo 'stat-chest="' . get_sub_field('level_number_3') . '"';
			    	}
			    	if(get_sub_field('level_type_3') == "Back level") {
			    		echo 'stat-back="' . get_sub_field('level_number_3') . '"';
			    	}
			    endwhile;
		    endif; ?>
		    <?php if( have_rows('data_stats_3') ):
		    	while ( have_rows('data_stats_3') ): the_row();
		    		if(get_sub_field('stat_text_3') == "Steps") {
		    			echo 'data-steps="' . get_sub_field('stat_number_3') . '"';
		    		}
		    		if(get_sub_field('stat_text_3') == "Calories") {
		    			echo 'data-calories="' . get_sub_field('stat_number_3') . '"';
		    		}
		    		if(get_sub_field('stat_text_3') == "Minutes") {
		    			echo 'data-minutes="' . get_sub_field('stat_number_3') . '"';
		    		}
		    	endwhile;
		    endif; ?>>
		    <?php $featuredImage3 = get_field("featured_image_3") ?>
			<div class="graphic" style="background:url(<?php echo $featuredImage3['url']; ?>) no-repeat top center">
				<div style="background:url(<?php echo $featuredImage3['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage3['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage3['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage3['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage3['url']; ?>) no-repeat top center"></div>
				<div style="background:url(<?php echo $featuredImage3['url']; ?>) no-repeat top center"></div> 
			</div>
		</li>
	</ul>

	<!-- Levels On Page Load -->
	<div class="stats">
		<?php if( have_rows('levels_1') ):
		    while ( have_rows('levels_1') ) : the_row();
		    	if(get_sub_field('level_type_1') == "Cardio level") {
		    		$cardio = get_sub_field('level_number_1');
		    	}

		    	if(get_sub_field('level_type_1') == "Core level") {
		    		$core = get_sub_field('level_number_1');
		    	}
		    	if(get_sub_field('level_type_1') == "Legs level") {
		    		$legs = get_sub_field('level_number_1');
		    	}
		    	if(get_sub_field('level_type_1') == "Arms and shoulders level") {
		    		$arms = get_sub_field('level_number_1');
		    	}
		    	if(get_sub_field('level_type_1') == "Chest level") {
		    		$chest = get_sub_field('level_number_1');
		    	}
		    	if(get_sub_field('level_type_1') == "Back level") {
		    		$back = get_sub_field('level_number_1');
		    	}
		    endwhile;
	    endif; ?>
		<div class="arms <?php if($arms) { echo 'level-' . $arms; } ?>">
			<div class="text">
				<span>Arms and shoulders level</span>
				<span class="level"><?php if($arms) { echo $arms; } ?></span>
			</div>
		</div>
		<div class="chest <?php if($chest) { echo 'level-' . $chest; } ?>">
			<div class="text">
				<span>Chest level</span>
				<span class="level"><?php if($chest) { echo $chest; } ?></span>
			</div>
		</div>
		<div class="cardio <?php if($cardio) { echo 'level-' . $cardio; } ?>">
			<div class="text">
				<span>Cardio level</span>
				<span class="level"><?php if($cardio) { echo $cardio; } ?></span>
			</div>
		</div>
		<div class="core <?php if($core) { echo 'level-' . $core; } ?>">
			<div class="text">
				<span>Core level</span>
				<span class="level"><?php if($core) { echo $core; } ?></span>
			</div>
		</div>
		<div class="back <?php if($back) { echo 'level-' . $back; } ?>">
			<div class="text">
				<span>Back level</span>
				<span class="level"><?php if($back) { echo $back; } ?></span>
			</div>
		</div>
		<div class="legs <?php if($legs) { echo 'level-' . $legs; } ?>">
			<div class="text">
				<span>Legs level</span>
				<span class="level"><?php if($legs) { echo $legs; } ?></span>
			</div>
		</div>
	</div>

	<!-- Navigation -->
	<ul class="people-nav">
		<li class="person1 active">
			<?php if( have_rows('avatar_1') ):
				while ( have_rows('avatar_1') ) : the_row();
				$avatarImage1 = get_sub_field('avatar_image_1');
				$avatarName1 = get_sub_field('avatar_name_1');
				$avatarProgram1 = get_sub_field('avatar_program_1');
			?>	
			<div class="details">
				<img src="<?php echo $avatarImage1['url']; ?>" alt="Person 1 Avatar"/>
				<span>
					<h3 class="small"><?php echo $avatarName1; ?></h3>
					<p><i class="icon-teardrop"></i> <?php echo $avatarProgram1->name; ?></p>
				</span>
			</div>
			<a href="#" title="See Heather's"></a>
		</li>
	<?php endwhile; ?>
<?php endif; ?>
		<li class="person2">
			<?php if( have_rows('avatar_2') ):
				while ( have_rows("avatar_2") ) : the_row();
				$avatarImage2 = get_sub_field('avatar_image_2');
				$avatarName2 = get_sub_field('avatar_name_2');
				$avatarProgram2 = get_sub_field('avatar_program_2');
			?>	
			<div class="details">
				<img src="<?php echo $avatarImage2['url']; ?>" alt="Person 2 Avatar"/>
				<span>
					<h3 class="small"><?php echo $avatarName2; ?></h3>
					<p><i class="icon-lightning-bolt"></i> <?php echo $avatarProgram2->name; ?></p>
				</span>
			</div>
			<a href="#" title="See Kenzie's stats"></a>
		</li>
	<?php endwhile; ?>
<?php endif; ?>
		<li class="person3">
			<?php if( have_rows('avatar_3') ):
				while ( have_rows("avatar_3") ) : the_row();
				$avatarImage3 = get_sub_field('avatar_image_3');
				$avatarName3 = get_sub_field('avatar_name_3');
				$avatarProgram3 = get_sub_field('avatar_program_3');
			?>	
			<div class="details">
				<img src="<?php echo $avatarImage3['url']; ?>" alt="Person 3 Avatar"/>
				<span>
					<h3 class="small"><?php echo $avatarName3; ?></h3>
					<p><i class="icon-heart"></i><?php echo $avatarProgram3->name; ?></p>
				</span>
			</div>
			<a href="#" title="See Matt's stats"></a>
		</li>
	<?php endwhile; ?>	
<?php endif; ?>	
	</ul>
</div>






