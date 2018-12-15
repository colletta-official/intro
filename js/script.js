var currentScroll=0;
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
			if (delta < 0) {
				if ($(this).next()[0] != undefined) {
					console.log(this,$(this).next()[0]);
					moveTop = currentScroll+$(this).outerHeight();
				}
			}
			else {
				if ($(this).prev()[0] != undefined) {
					moveTop = currentScroll-$(this).outerHeight();
				}
			}
			$(".scrollBlind").stop().animate(
			{
				scrollTop: moveTop + 'px'
				}, {
				duration: 500, complete: function () {
					currentScroll=moveTop;
					console.log(currentScroll, $(".scrollBlind").scrollTop(), "completed");
				}
			});
			console.log(moveTop, currentScroll);
		});
	});
});
