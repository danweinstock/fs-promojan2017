<?php

use Undefined\ThemeMigrations;

require_once get_template_directory() . '/_/lib/Undefined/ThemeMigrations.php';

add_action( 'init', 'fitstar_theme_migrations', 50);
function fitstar_theme_migrations() {

	$tm = ThemeMigrations::get_instance();

	/*
	 * March 9th 2015
	 * Add Region Terms
	 */
	$tm->register('add_region_terms', function() {

		$terms = array(
			'fr' => 'French',
			'es' => 'Spanish',
			'de' => 'German',
			'pt' => 'Portuguese',
			'zh-cn' => 'Chinese'
		);

		foreach ($terms as $slug=>$name) {
			wp_insert_term($name, 'region', array('slug'=>$slug));
		}

	});

	/*
	 * March 10th 2016
	 * Set the page templates for the legal pages
	 */
	$tm->register('update_legal_page_templates', function() {

		foreach (array('privacy-policy', 'terms-of-use') as $path) {
			$page = get_page_by_path($path);
			if ($page) update_post_meta($page->ID, '_wp_page_template', 'page-legal.php');
		}

	});

	/*
	 * March 10th 2015
	 * Add Search Page
	 */
	$tm->register('2016_03_add_search_page', function() {

		// book a tour home page
		$page = array(
			'post_type'   => 'page',
			'post_parent' => 0,
			'post_name'   => 'search-results',
			'post_title'  => 'Search Results',
			'post_status' => 'publish'
		);

		$id = wp_insert_post($page);
		update_post_meta($id, '_wp_page_template', 'page-search.php');

	});


    /*
     * April 25th
     * Add PT Video Translations
     */
    $tm->register('2016_04_add_pt_video_translations',
        function() {

            $pt_video_ids = array(
                'fr'=> 162600010,
                'es' => 162599972,
                'de' => 162599833,
                'pt' => 162600049,
                'zh-cn' => 162600104
            );

            $acf_value = array();

            foreach ($pt_video_ids as $lang=>$video_id) {
                $term = get_term_by('slug', $lang, 'region');
                if ($term) {
                    $acf_value[] = array(
                        'language' => $term->term_id,
                        'video_id' => $video_id
                    );
                }


            }

            $pt_page = get_page_by_path('personal-trainer');

            if ($pt_page) update_field('field_57215add62c8f', $acf_value, $pt_page->ID);

        }

    );


        // migrate
	$tm->migrate();
}
