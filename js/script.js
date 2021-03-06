var currentScroll=0;
var offsets=[0];
$(document).ready(function(){
	offsetsReset();
	$(".scrollBlind")[0].onscroll=function(){
		var $el = $('circle');
		var nth;
		var scr=$(".scrollBlind").scrollTop();
		for(nth=0;nth<offsets.length-1;nth++)
		{
			if(offsets[nth]<=scr && offsets[nth+1]>scr) break;
		}
		$el.removeClass('on');
		$el.eq(nth).addClass('on');
	};
	$("section").each(function () {
		$(this).on("mousewheel DOMMouseScroll", function (e) {
			if($(document).width()>700)
			{
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
			}
		});
	});
});
$(window).resize(function(){
	offsetsReset();
});
function linkmove(where)
{
        $(".scrollBlind").stop().animate(
	{
		scrollTop: offsets[where]
		}, {
		duration: 500, complete: function () {
			currentScroll=$(".scrollBlind").scrollTop();
		}
	});
}
function offsetsReset()
{
	offsets[0]=0;
	for(var i=1;i<=$("section").length;i++)
	{
		offsets[i]=offsets[i-1]+$("section").eq(i-1).height();
	}
}
