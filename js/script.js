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
			var moveTop = null
			console.log(this, $(this).next());
			if (delta < 0) {
				if ($(this).next() != undefined) {
					moveTop = $(this).next().offset().top;
				}
			}
			else {
				if ($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
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
