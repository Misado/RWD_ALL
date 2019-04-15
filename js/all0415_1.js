$(document).ready(function() {
	// Initialize Swiper
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 5,
		loop: true,
		/*autoplay: {
			delay: 5000,
		},*/
		breakpoints: {
	    // when window width is <= 320px
	    413: {
	      slidesPerView: 1,
	      spaceBetween: 0
	    },
	    // when window width is <= 480px
	    /*480: {
	      slidesPerView: 2,
	      spaceBetween: 5
	    },*/
	    // when window width is <= 640px
	    640: {
	      slidesPerView: 2,
	      spaceBetween: 5
	    }
	  }
	});

	// Banner Cycle setting
	$(".banner").cycle({
		fx: 'fade',
		speed: 3000,
	});

	$(".mainMenu > a").click(function(event) {
		event.preventDefault();
		$(".subMenu").slideToggle();
	});

	$(".showmenu").click(function(event) {
		event.preventDefault();
		/* Act on the event */
		$("body").toggleClass('mobile');
	});

	// Back to top of the page
	$(".backtotopBtn").click(function(event) {
		//remove link event
		event.preventDefault();
		$("html,body").animate({scrollTop:0}, 500);
	});

	// 空心愛心跟實心愛心互換
	$(".cuisineHeart").click(function(event) {
		$(this).find("i").toggleClass('far fa-heart').toggleClass('fas fa-heart');
	});

	$(".registerRuleMobile a").click(function(event) {
		event.preventDefault();
		$(".registerRuleMobile p").slideToggle();
	});
});