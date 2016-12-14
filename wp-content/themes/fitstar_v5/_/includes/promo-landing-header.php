<!DOCTYPE HTML>
<!--[if IEMobile 7 ]><html class="no-js iem7" manifest="default.appcache?v=1"><![endif]--> 
<!--[if lt IE 7 ]><html class="no-js ie6" lang="en"><![endif]--> 
<!--[if IE 7 ]><html class="no-js ie7" lang="en"><![endif]--> 
<!--[if IE 8 ]><html class="no-js ie8" lang="en"><![endif]--> 
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html class="no-js" lang="en"><!--<![endif]-->
  <head>
    <script src="//cdn.optimizely.com/js/1120090038.js"></script>
    <title><?php wp_title( '|' ); ?></title>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/modernizr.js"></script>

    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <link rel="shortcut icon" href="/favicon.ico"/>
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/_/css/promotion-landing.css" media="all" />

    <!-- Foundation 3 and CSS Media Queries for IE8 and earlier -->
    <!--[if lt IE 9]>
      <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/_/ie8/foundation-3-grid.css">
    <![endif]-->

    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/_/js/stats.js"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        new FitstarStatsTracker("<?php the_field('floodlight_category'); ?>");
      });
    </script>