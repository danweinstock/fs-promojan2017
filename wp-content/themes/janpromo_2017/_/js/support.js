

// ==========================================================================
// Menu Drawer
// ==========================================================================
jQuery(document).ready(function($) {

	// desktop
	var $pageContent = $('#company-support-portal, header.global');

	var menuDrawer = {
		options: {
			menu: $('#menu'),
			pageContent: $pageContent,
			menuBtn: $('#menu-btn')
		},

		init: function(options) {

			// Allow custom options on init
			if (options && typeof(options) == 'object') {
				$.extend(menuDrawer.options, options);
			}

			menuDrawer.$menu = menuDrawer.options.menu;
			menuDrawer.$page = menuDrawer.options.pageContent;
			menuDrawer.$width = menuDrawer.$menu.innerWidth();
			menuDrawer.$btn = menuDrawer.options.menuBtn.click(function(e){
				e.preventDefault();
				if (menuDrawer.$page.data('state') === "open") {
					menuDrawer.hideMenu();
				} else {
					menuDrawer.revealMenu();
				}
			});
			/*
			 Close the drawer if any links inside the menu are clicked,
			 needed for in-page anchors and close button
			 */
			menuDrawer.$links = menuDrawer.$menu.find('.close-menu').click(function(e){
				e.preventDefault();
				menuDrawer.hideMenu();
			});
		},
		revealMenu: function(){
			menuDrawer.$page.addClass('content');
			menuDrawer.$page.data('state', 'open').animate({
				left: -(menuDrawer.$width) + 'px'
			}, 300);
			$('#menu').fadeIn();
		},
		hideMenu: function(){
			menuDrawer.$page.data('state', 'closed').animate({
				left: 0
			}, 500);
			$('#menu').fadeOut();
		}
	};

	menuDrawer.init();
});