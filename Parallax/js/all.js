$(document).ready(function(){
	var executeTimes = 0;
	var skillShow = false;
	$('.scrollTop').click(function(event) {
		event.preventDefault();
		/* Act on the event */
		var target = $(this).attr('href');
		var targetPos = $(target).offset().top;
		//console.log(target+"Position: "+targetPos);

		$('html,body').animate({scrollTop: targetPos},800);
	});

	$(window).scroll(function(event) {
		/* Act on the event */
		var scrollPos = $(window).scrollTop();
		//console.log('scrollPos'+scrollPos);
		var windowHeight = $(window).height();
	    //console.log("scrollPos: "+scrollPos, "windowHeight: "+windowHeight);
	    
	    $('.scrollTop').each(function(){
	      var target = $(this).attr('href'); 
	      var targetPos = $(target).offset().top;
	      var targetHeight = $(target).outerHeight();
	      //console.log("scrollPos: "+scrollPos,"target: "+target, "targetPos: "+targetPos, "targetHeight: "+targetHeight);
	      //console.log("------");
	      if (scrollPos >= targetPos + 1 && scrollPos < (targetPos + targetHeight)){
	        $('.scrollTop').removeClass('active');
	        $(this).addClass('active');
	      } else {
	        $(this).removeClass('active')
	      }
	    });

	    var skillTop = $("#skills").position().top;
	    if (scrollPos + windowHeight/2 > skillTop && !skillShow){
		    $('.progress-bar').each(function(){
	    		var thisValue = $(this).data('progress');
	    		//console.log("data-progress: "+thisValue);
	    		//console.log("executeTimes: "+executeTimes);
	    		//console.log("------");
	    		$(this).css("width",thisValue+"%");
	    		$(this).text(thisValue+"%");
	    		skillShow = true;

		    	executeTimes=executeTimes+1;
		    });
	   	}

	   	$('.animatedHide').each(function(){
	   		//console.log("TEST");
	   		var thisPos = $(this).offset().top;
	   		if (scrollPos + windowHeight > thisPos){
	   			//console.log("scrollPos: "+scrollPos,"thisPos: "+thisPos);
	   			$(this).addClass('animatedFadeIn');
	   		}
	   	});

	   	$("#profiles").css("background-position-y", -(scrollPos/2) + "px");
	   	//console.log("scrollPos: " +scrollPos + "px");
	   	//console.log("background-position-y: " + -(scrollPos/2) + "px");

	   	console.log("#header-ele translateY(" + scrollPos + "px");
	   	$("#header-ele").css("transform","translateY(" + scrollPos/2 + "px)")
	   	console.log("#header-ele translateY(" + scrollPos/2 + "px");
    });
});