$(document).ready(function(){
	$(".tecPart_nav > li").hover(function(){
		$(this).find("ul").css("display","block");
	},function(){
		$(this).find("ul").css("display","none");
	});
});