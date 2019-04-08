$(document).ready(function() {
	$(".showmenu").click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$("body").toggleClass('menu-show');
		$("body").toggleClass('open');
	});
});