$(document).ready(function() {
	// Initialize Swiper
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 5,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
	    // when window width is <= 414px
	    414: {
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

	// navbar 1stmenu setting
	$(".mainMenu > a").click(function(event) {
		event.preventDefault();
		// submenu slideToggle
		$(this).parent().find("ul").slideToggle();
		$(this).toggleClass('active');
		// other submenu slideUp
		$(this).parent().siblings().find("ul").slideUp();
		$(this).parent().siblings().find("a").removeClass('active');
	});

	// navbar 2ndmenu setting
	$(".subMenu a").click(function(event) {
		$(this).toggleClass('active');
		$(this).parent().siblings().find("a").removeClass('active');
	});

	/* hamburger menu setting */
	$(".showmenu").click(function(event) {
		event.preventDefault();
		$("body").toggleClass('mobile');
	});

	// Back to top of the page
	$(".backtotopBtn").click(function(event) {
		event.preventDefault();
		$("html,body").animate({scrollTop:0}, 500);
	});

	// 空心愛心跟實心愛心互換
	$(".cuisineHeart").click(function(event) {
		$(this).find("i").toggleClass('far fa-heart').toggleClass('fas fa-heart');
	});

	// 會員註冊條款 setting
	$(".registerRuleMobile a").click(function(event) {
		event.preventDefault();
		$(".registerRuleMobile p").slideToggle();
	});

	$(".chefInfoReadMore").click(function(event){
		event.preventDefault();
		$(".chefSubInfo").slideToggle();
	});

	// 回上層的按鈕等到滑到banner下才出現
	$(window).scroll(function(event) {
		let scrollPos = $(window).scrollTop();
		
		let bannerShow = $(".banner").css("display");
		let bannderMobileShow = $(".bannerMobile").css("display");

		let bannerBottom = 0;
		if ( bannerShow === "none" ){
			let bannerMobileHeight = $(".bannerMobile").height()/2;
			let bannerMobileTop = $(".bannerMobile").offset().top;
			bannerBottom = bannerMobileTop+bannerMobileHeight;
		} else if ( bannderMobileShow === "none" ){
			let bannerHeight = $(".banner").height()/2;
			let bannerTop = $(".banner").offset().top;
			bannerBottom = bannerTop+bannerHeight;
		}

		if ( scrollPos >= bannerBottom ){
			$(".backtotopBtn").show();
		} else {
			$(".backtotopBtn").hide();
		}

	});
});

