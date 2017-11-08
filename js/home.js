$(document).ready(function(){
	$(".mui-content .tab .tab-nav a").click(function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parent().next().find("ul").eq(index).addClass("cur").siblings().removeClass("cur");
	});
});
