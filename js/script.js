$(document).ready(function(){
	$("section").each(function () {
		$(this).on("mousewheel DOMMouseScroll", function (e) {
			e.preventDefault();
			var delta = 0;
			if (!event) event = window.event;
			if (event.wheelDelta) {
				delta = event.wheelDelta / 120;
				if (window.opera) delta = -delta;
			}
			else if (event.detail) delta = -event.detail / 3;
			var moveTop = null;
			console.log(this, $(this).next()[0], $(this).prev()[0]);
			console.log($(".scrollBlind").scrollTop());
			if (delta < 0) {
				if ($(this).next()[0] != undefined) {
					moveTop = $(this).next().offset().top -100;
					console.log($(this).next().offset(), moveTop);
				}
			}
			else {
				if ($(this).prev()[0] != undefined) {
					moveTop = $(this).prev().offset().top -100;
					console.log($(this).prev().offset(), moveTop);
				}
			}
			$(".scrollBlind").stop().animate(
			{
				scrollTop: moveTop + 'px'
				}, {
				duration: 500, complete: function () {}
			});
		});
	});
});
