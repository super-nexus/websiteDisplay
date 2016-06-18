$(document).ready(function(){
	$(window).stellar();
	$("#menu").click(function(){
		lstog();
	});
	$(".rdmri").click(function(){
		uno();
		$(".uno").toggleClass("limited");
		if($("#ls").hasClass("lshastog") == true){
			lstog();}
		$(".sun").animate({width:"toggle", height:"toggle"}, 100).toggleClass("sunhastog");
	});
	$(".rdmriii").click(function(){
		tres();
		$(".tres").toggleClass("limited");
		if($("#ls").hasClass("lshastog") == true){
			lstog();}
	});
	$(".rdmrii").click(function(){
		dos();
		$(".dos").toggleClass("limited");
		if($("#ls").hasClass("lshastog") == true){
			lstog();}
	});
	$(".clickm").mouseenter(function(){
		$(this).css("color", "#c0c0c0");
	});
	$(".clickm").mouseleave(function(){
		$(this).css("color", "#ffffff");
	});
	$(".lstr").mouseenter(function(){
		$(this).css("color", "#c0d0d0");
	});
	$(".lstr").mouseleave(function(){
		$(this).css("color", "#ddffff");
	});
	$("#lseins").click(function(){
		$(".contents").addClass("limited");
		$(".uno").removeClass("limited");
		$(".vecmanj").removeClass("vecexp");
		$('html,body').unbind().animate({scrollTop: 0}, "fast");
		lstog();
		if($(".sun").hasClass("sunhastog") == false){
			$(".sun").animate({width:"toggle", height:"toggle"}, 100);
			$(".sun").addClass("sunhastog");
		}
		uno();
	});	
	$("#lszwei").click(function(){
		$(".contents").addClass("limited");
		$(".dos").removeClass("limited");
		$(".vecmanj").removeClass("vecexp");
		$('html,body').unbind().animate({scrollTop: $(".dos").offset().top-85},"fast");
		lstog();
		dos();
	});
	$("#lsdrei").click(function(){
		$(".contents").addClass("limited");
		$(".tres").removeClass("limited");
		$(".vecmanj").removeClass("vecexp");
		$('html,body').unbind().animate({scrollTop: $(".tres").offset().top-85},"fast");
		lstog();
		tres();
	});
	$("#ls2").click(function(){
		$(".contents").addClass("limited");
		$(".vecmanj").removeClass("vecexp");
		lstog();
		$('html,body').unbind().animate({scrollTop: $("#sun1").offset().top-85},"fast");
		if($(".sun").hasClass("sunhastog") == true){
			$(".sun").animate({width:"toggle", height:"toggle"}, 100);
			$(".sun").removeClass("sunhastog");
		}
	});
	$("#sun1").click(function(){
		$("#sun1").animate({width:"toggle", height:"toggle"}, 100, function(){
			window.location.href = "fem.html"
		});
	});
	$("#sun2").click(function(){
		$("#sun2").animate({width:"toggle", height:"toggle"}, 100, function(){
			window.location.href = "sd.html"
		});
	});
	$("#sun3").click(function(){
		$("#sun3").animate({width:"toggle", height:"toggle"}, 100, function(){
			window.location.href = "stereo.html"
		});
	});
	$("#sun4").click(function(){
		$("#sun4").animate({width:"toggle", height:"toggle"}, 100, function(){
			window.location.href = "stat.html"
		});
	});
	$("#sun5").click(function(){
		$("#sun5").animate({width:"toggle", height:"toggle"}, 100, function(){
			window.location.href = "viri.html"
		});
	});
	//var k=$("#hd table").width()/$(window).width();
	//if($("#hd table tbody").width() > $(window).width()){
	//	var k2=$("#hd table").width();
	//	$(".navbar").css("padding","0 "+2/(k*3)+"em");
	//	$(".menu").removeAttr("id", "menu").attr("id", "menum");
	//};
	if($("#hd").height()<$("#hd ul").height()){
		$("#container").css("top", $("#hd ul").height()-60);
	};
});
function uno(){
	if($(".rdmri").hasClass("vecexp")!==true){
		$(".rdmri").addClass("vecexp")}
	else {$(".rdmri").removeClass("vecexp")};
	if($(".rdmri").hasClass("vecexp") && !$(".rdmri").hasClass("ii")){$(".rdmri").toggle();$(".rdmri").addClass("ii");}
	else if(!$(".rdmri").hasClass("vecexp") && $(".rdmri").hasClass("ii")){$(".rdmri").toggle();$(".rdmri").removeClass("ii")};
}
function dos(){
	if($(".rdmrii").hasClass("vecexp")!==true){
		$(".rdmrii").addClass("vecexp")}
	else {$(".rdmrii").removeClass("vecexp")};
	if($(".rdmrii").hasClass("vecexp") && !$(".rdmrii").hasClass("ii")){$(".rdmrii").toggle();$(".rdmrii").addClass("ii");}
	else if(!$(".rdmrii").hasClass("vecexp") && $(".rdmrii").hasClass("ii")){$(".rdmrii").toggle();$(".rdmrii").removeClass("ii")};
}
function tres(){
	if($(".rdmriii").hasClass("vecexp")!==true){
		$(".rdmriii").addClass("vecexp")}
	else {$(".rdmriii").removeClass("vecexp")};
	if($(".rdmriii").hasClass("vecexp") && !$(".rdmriii").hasClass("ii")){$(".rdmriii").toggle();$(".rdmriii").addClass("ii");}
	else if(!$(".rdmriii").hasClass("vecexp") && $(".rdmriii").hasClass("ii")){$(".rdmriii").toggle();$(".rdmriii").removeClass("ii")};
}
function lstog(){
	//var isMobileScreenWidth = ((screen.width / window.devicePixelRatio) < 1000);
	var isMobileScreenWidth = $("html").width() < 1000;
	console.log(isMobileScreenWidth);
	$("#ls").animate({width:'toggle'},100);
	$("#ls").toggleClass("lshastog");
	if(isMobileScreenWidth == false){
		$(".contents").toggleClass("opened");
	}
}

	
	