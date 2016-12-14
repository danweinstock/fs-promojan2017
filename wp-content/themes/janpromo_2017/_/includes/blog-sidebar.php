<div class="categories notranslate">

	<?php $args = array(
		'show_option_all'    => '',
		'orderby'            => 'name',
		'order'              => 'ASC',
		'style'              => 'list',
		'hide_empty'         => 1,
		'hierarchical'       => 1,
		'title_li'           => __( '' ),
		'exclude'            => '27, 2081, 2082',
		'show_option_none'   => __('No categories')

	); ?>

		<ul class="blog-category-list">

			<li><a href="#" class="close-menu">CLOSE X</a></li>
			<li class="mobile-search">
				<a href="#" class="mobile-only sidebar-search-mobile" id="sidebar-search-mobile">search</a>
			</li>
			<a class="blog-menu-logo" href="/">
				<img src="<?php echo get_template_directory_uri(); ?>/_/images/logos/logo-fitstar-white.svg" alt="Fitstar. By Fitbit.">
			</a>
			<li class="cat-item">
			<a href="/blog/" class="sidebar-all">all</a>
			</li>
			<?php wp_list_categories( $args ); ?>
			<li class="cat-item desktop-only">
			<a href="#" class="sidebar-search" id="sidebar-search">search</a>
			</li>
		</ul>
</div>
<form role="search" class="search-blog" method="get" id="searchform" action="/search-results/">
    <div>
    	<label for "sl-search-keyword" class="search-label"><h3 class="white">Search the Fitstar Blog</h3></label>
    	<i class="icon-icon-search"></i>
        <input type="text" value="" name="k" id="k" placeholder="" class="sl-search-keyword"/>
        <input class="button bg-persimmon" type="submit" id="searchsubmit" value="SEARCH" />
    </div>
</form>

<!-- <?php Fitstar_Utilities::get_template_parts( array( '_/includes/blog-category-posts' ) ); ?> -->
