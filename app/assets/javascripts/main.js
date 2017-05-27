$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0) {
			$('.nav-bar').removeClass('free-nav');
		} else {
			$('.nav-bar').addClass('free-nav');
		}
	}).scroll();

	$('.hamburger-menu').on('click', toggleMenu);

	$(document).on('click', function(event) {
		if (!$(event.target).closest('.nav-bar').length) {
			$('.hamburger-menu').removeClass('cross-icon');
			$('.nav-bar').removeClass('opened-nav');
			$('.nav-list').removeClass('show-stacked-menu');
		}
	});

	function toggleMenu() {
		$('.hamburger-menu').toggleClass('cross-icon');
		$('.nav-bar').toggleClass('opened-nav');
		$('.nav-list').toggleClass('show-stacked-menu');
	}

	$(window).resize(function() {
		var menuType = window.getComputedStyle(document.querySelector('.nav-bar'), '::before').getPropertyValue('content').replace(/\"/g, '');

		if ($('.nav-bar').hasClass('opened-nav') && menuType != 'hamburger-menu') {
			toggleMenu();
		}
	});

	$('.nav-link').on('click', function() {
		console.log();
		$('html, body').animate({
		    scrollTop: $('.' + $(this).text().toLowerCase() + '-panel').offset().top - $('.nav-bar').height()
		}, 500)
	});
});