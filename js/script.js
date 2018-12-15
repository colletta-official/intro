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
					moveTop = currentScroll+$(this).outerHeight();
				}
				else moveTop = 99999;
			}
			else {
				if ($(this).prev()[0] != undefined) {
					moveTop = currentScroll-$(this).outerHeight();
				}
			}
			if(moveTop != null)
			{
				$(".scrollBlind").stop().animate(
				{
					scrollTop: moveTop + 'px'
					}, {
					duration: 500, complete: function () {
						currentScroll=$(".scrollBlind").scrollTop();
					}
				});
			}
		});
	});
});
