$(document).ready(function(){
	$(window).on("load",function(){
	var Heigth = $(".imgPoster").height();
	$(".linePOSTERS").height(Heigth);
	});
		
	
	$(window).resize(function(){
		Heigth1 = $(".imgPoster").height();
		$(".linePOSTERS").height(Heigth1);
		var Delta=($(".imgPoster").height()-$(".linePOSTERS").height())
		if (Delta!=0){
			$(".linePOSTERS").height($(".linePOSTERS").height()+Delta);
		}
	});
	
	$(".seasonContain").hover(function(){
		var Season=$(this).find("div");
// 		$(this).find(".season").css({"opacity":"0.05"});
		var backFlip=anime({
			targets: Season[0],
			rotateY: "0deg",
			duration: "400"
		});
		var Flip=anime({
			targets: Season[1],
			rotateY: "180deg",
			duration: "400"
		});
		
	},function(){
		var Season=$(this).find("div");
// 		$(this).find(".season").css({"opacity":"unset"});
		var backFlip=anime({
			targets: Season[0],
			rotateY: "-180deg",
			duration: "400"
		});
		var Flip=anime({
			targets: Season[1],
			rotateY: "0deg",
			duration: "400"
		});
		
	});
	$(".ChangeSEASON").click(function(){
		$("div").removeClass("activeSeason");
		$(".seasons").addClass("activeTAB");
		setTimeout(function(){
			$(".seasons").addClass("showSlide");
        },1);
	});
	$(".linkBAR a").click(function(){
		$("div").removeClass("activeSeason");
		$(".View div").removeClass("activeTAB");
		$(".View div").removeClass("showSlide");
		var OPEN = $(".View div."+this.id)[0];
		$(OPEN).addClass("activeTAB");
		setTimeout(function(){
			$(OPEN).addClass("showSlide");
        },1);
		setTimeout(function(){
			$(".View").addClass("showSlide");
        },1);
	});
	
	$(".next").click(function(){
		var currentImage = $(".img.curry");
		var currentImageIndex = $(".img.curry").index();
		var nextImageIndex=currentImageIndex+1;
		var nextImage=$(".img").eq(nextImageIndex);
//		currentImage.fadeOut(400);
		currentImage.removeClass("curry");
		currentImage.removeClass("showSlide");
		
		if (nextImageIndex==($(".img:last").index()+1)){
//			$(".img").eq(0).fadeIn(400);
			$(".img").eq(0).addClass("curry");
			setTimeout(function(){
            $(".img").eq(0).addClass("showSlide");
        },1);
		}
		else{
//			nextImage.fadeIn(400);
			nextImage.addClass("curry");
			setTimeout(function(){
            nextImage.addClass("showSlide");
        },1);
		}
	});
	
	$(".prev").click(function(){
		var currentImage = $(".img.curry");
		var currentImageIndex = $(".img.curry").index();
		var prevImageIndex=currentImageIndex-1;
		var prevImage=$(".img").eq(prevImageIndex);
//		currentImage.fadeOut(400);
		currentImage.removeClass("curry");
		currentImage.removeClass("showSlide");
//		prevImage.fadeIn(400);
		prevImage.addClass("curry");
		setTimeout(function(){
            prevImage.addClass("showSlide");
        },1);
		
		
		
	});
	
	
	
	$("input").change(function(event){
		event.preventDefault();
		document.forms["Forma"].submit();
	});
	
	otpravka = function(event){
		event.preventDefault();
		alert(document.forms["Forma"].find("input[name='seson']").val());
	}
	
	
	
	$(".seasonContain").click(function(){
		var Season=$(this).find("div")[1];
		var seasonNAME = (Season).id.slice(1);
		
		
		$(".seasons").removeClass("activeTAB");
		$(".seasons").removeClass("showSlide");
		if ($("."+Season.id).hasClass("activeSeason")){}
        else{        
            $("div").removeClass("activeSeason");
        }		
		$("."+Season.id).toggleClass("activeSeason");
		$("."+Season.id).find(".seasonNAME").html(seasonNAME+" сезон");
		var PLAYER = $("."+Season.id).find("#player");
		$("."+Season.id).find("source").attr("src","season"+seasonNAME+"/1"+".mp4");
		$(PLAYER).get(0).load();
	});
	
	
	
	$("select").change(function(){
		
		var PREDOK = this.form.parentNode.parentNode.parentNode;//указывает контейнер нужного сезона на странице, в котором искать видео-плеер
		var PLAYER = $(PREDOK).find("#player");
		
		var seasonNumber = $(PREDOK).attr("class").slice(12,13);//Получает номер сезона, который указан в имени класса блока 
		                                                        //с текущим сезоном в HTML (12-ый символ в имени)
		$(PREDOK).find("source").attr("src","season"+seasonNumber+"/"+$(this).val()+".mp4");//Заменяет видео-файл на файл серии с выбранным 
		                                                                                    //в списке номером из папки с текущим сезоном 
		
		$(PLAYER).get(0).load();//перезагружает видео-плеер для отображения изменений после замены видео-файла
	
	});
	
	
	
	
	
	$(".menu li").not(".menu li li").click(function(){
		
        var tab=$(".menu li div#i"+this.id);
        
        if ($(this).find(".listTAB").hasClass("active")){}
        else{        
            $(".listTAB").removeClass("active");
            $(".listTAB").removeClass("show");
        }
		if ($(this).find(".menuLINK").hasClass("PodsvetkaLink")){}
        else{        
            $(".menuLINK").removeClass("PodsvetkaLink");
        }
        $(this).find(".menuLINK").toggleClass("PodsvetkaLink");
        tab.toggleClass("active");
        setTimeout(function(){
            tab.toggleClass("show");
        },1);
		
		});
	
	$(document).mouseup(function (e){ // событие клика по веб-документу
		
		var selector = $(".menu li"); // тут указываем ID элемента
		
		if (!selector.is(e.target) // если клик был не по нашему блоку
		    && selector.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".menuLINK").removeClass("PodsvetkaLink");
			$(".menu div").removeClass("active");
			$(".menu div").removeClass("show"); // скрываем его
		}
	});
});