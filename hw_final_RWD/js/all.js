$(document).ready(function() {
	// Initialize Swiper
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 5,
		loop: true,
		autoplay: {
			delay: 5000,
		},
	});

	// Banner Cycle setting
	$(".banner").cycle({
		fx: 'fade',
		speed: 3000,
	});
});