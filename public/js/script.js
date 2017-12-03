$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();
  if (scroll >= 50) sticky.addClass('stickyHeader');
  else sticky.removeClass('stickyHeader');
});

$(window).scroll(function(){		
	var distanceFromBottom = $(document).height() - ($(document).scrollTop() + $(window).height());       
	     if(distanceFromBottom === 0) {
	        $('.myComparision').addClass('btm-sec');
		}else{
			$('.myComparision').removeClass('btm-sec');
		}

});

$(document).ready(function() {
	if($(window).width() <= 991){
      $('.sectionList h4').click(function(){
        $(this).toggleClass('active').next('.show_wrap').slideToggle('slow');
      })
	}
});
$(document).ready(function() {
	$('.compare_btn').click(function(){
			$(this).toggleClass('checked');
	});
	$('.btm-circle').on('click',function(){
		$('.myComparision').animate({scrollTop: $(this).offset()}, 800);	
		$(this).toggleClass('active').parent('.myComparision').toggleClass('active');
	 })
	// $('body').click(function(){
	// 	$('.compare_btn').removeClass('checked');
	// })
	// if($(window).width() > 768){
	// $('.btm-circle').on('click',function(){
	// 	$('.myComparision').animate({scrollTop: $(this).offset()}, 800);	
	// 	$(this).toggleClass('active').parent('.myComparision').toggleClass('active');
	//  })
 // }else if( $(window).width() <= 767){
 // 		$('.btm-circle').on('click',function(){
 // 			$('.myComparision').animate({scrollTop: $(this).offset()}, 800);
 // 			$(this).toggleClass('active').parent('.myComparision').toggleClass('active');
 // 			//alert($(this).parent('.myComparision').children('.container .col-md-9.col-sm-12'))
 // 			$(this).next().find('.compareBox').fadeToggle();
 // 			$(this).next().find('.compare_now.d-block').fadeToggle();
 // 		})
 // }
	$('.cross-burger').on('click',function(){
		$(this).parent('.compareBox').fadeOut('slow');
	})
	//var vfe = $('footer.inner').height();
	//$('.myComparision').css({'position':'fixed','bottom':'0px'})
	$('.navbar-toggle.collapsed').click(function(){
		$(this).toggleClass('active');
		$('#myNavbarDiv ul.navbar-nav').toggleClass('active');
	})
});
	window.onresize = function(event) {
		resizeDiv();
	}
	function resizeDiv() {
		var vw = $(window).width();
		var vh = $(window).height();
		var vhe = $('header').height();
		var vfe = $('footer').height();
		var tpbnnr = $('.topBanner').css("height",vh);
		$('.btm_section').css("height",vh-vfe);	
	}
$(document).ready(function() {
	$("#ex16a").slider({
				min  : 0,
				max  : 100,
				value: 70,
				focus: true
	});
	$("#ex2").slider();
	
	$("#ex2").on("slide", function(slideEvt) {
	$("#ex2SliderVal").text(slideEvt.value[0]);
	$("#ex2SliderVal1").text( slideEvt.value[1]);	
});
resizeDiv();
	 wow = new WOW(
	  {
	    animateClass: 'animated',
	    offset:       0,
	    callback:     function(box) {
	      //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	    }
	  }
	);
	wow.init(); 
});