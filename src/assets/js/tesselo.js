$(document).ready(function() {


	/* Function change menu height on scroll */

	$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // this refers to window
        $(".bgmenu").addClass("resized");
    } else {
		$(".bgmenu").removeClass("resized");
	}
	});

	 if ($(this).scrollTop() >= 50) { // this refers to window
        $(".bgmenu").addClass("resized");
    } else {
		$(".bgmenu").removeClass("resized");
	}




	/* Offset to anchor links on click */
	(function($) {
	  $('a[href*=\\#]:not(.credits-toggle, .carousel-control-next, .carousel-control-prev)').click(function()
	  {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname)
		{

		  var target = $(this.hash),
		  headerHeight = $(".bgmenu").height() + 5; // Get fixed header height

		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

		  if (target.length)
		  {
			$('html,body').animate({
			  scrollTop: target.offset().top - 73
			}, 500);
			return false;
		  }
		}
	  });
	})(jQuery);




	$('a[href*="#"]:not(.credits-toggle, .carousel-control-next, .carousel-control-prev)').click(function(){
	      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname)
			{

			  var target = $(this.hash),
			  headerHeight = $(".bgmenu").height() + 5; // Get fixed header height

			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			  if (target.length)
			  {
				$('html,body').animate({
				  scrollTop: target.offset().top - 73
				}, 500);
				return false;
			  }
			}
	   });




/* Offset to anchor links on page load */
var target = window.location.hash;

	if ( target !== '' ){
		var $target = jQuery(target);
		jQuery('html, body').stop().animate({
		'scrollTop': $target.offset().top - 73}, // set offset value here i.e. 50
		900,
		'swing',function () {
		});
	}



/* Check if line is in viewport and animate */
(function($, win) {
  $.fn.inViewport = function(cb) {
    return this.each(function(i, el) {
      function visPx() {
        var H = $(this).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
      }
      visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));



$('.linha').each(function () {
		$(".linha").inViewport(function(px) {
  			if (px) $(this).addClass("animline");
		});
});

$('.linhac').each(function () {
		$(".linhac").inViewport(function(px) {
  			if (px) $(this).addClass("animline");
		});
});




    $('.carousel').carousel({interval: 2000});

	  var elems = $('.letra').css("opacity","0").get(); // Hide and collect elements
    for (var i = elems.length - 1; i > 1; i--) { // Shuffle the order
        var j = Math.floor(Math.random() * (i + 1));
        var elem = elems[j];
        elems[j] = elems[i];
        elems[i] = elem;
    }
    var i = 0;
    var timer = setInterval(function() { // Show them sequentially
        $(elems[i]).css("opacity","1");
        i++;
        if (i === elems.length) {
            clearInterval(timer);
        }

    }, 100); // Every x ms



		// Home animation session cookie //

		jQuery("#home").css("display","none");
		jQuery("#homemobile").css("display","none");
    // localStorage.removeItem('isshow');
		var isshow = localStorage.getItem('isshow');
		if (isshow === null) {
	       localStorage.setItem('isshow', 1);

		  if ($(window).width() < 768) {
		       // Show animation one time
		       jQuery("#homemobile").css("display","block");
		       jQuery("body").css("overflow","hidden");
		       jQuery("html").css("overflow","hidden");
		}
		else {
		        // Show animation one time
			jQuery("#home").css("display","block");
			jQuery("body").css("overflow","hidden");
			jQuery("html").css("overflow","hidden");
		}
	    }


	// Team //

	function team1() {
		$("#team-headshots").css('background-image','url(' + STATIC_URL + 'assets/img/team-remi-min.jpg)');
		//$("coraltera").attr('style', 'color: #3127C7 !important');
		//$("#remi a").attr('style', 'color: #3127C7 !important');
		$(".coraltera1").addClass("blue");
		$(".coraltera2").removeClass("blue");
		$(".coraltera3").removeClass("blue");
		$(".coraltera4").removeClass("blue");

	}

	function team2() {
		$("#team-headshots").css('background-image','url(' + STATIC_URL + 'assets/img/team-daniel-min.jpg)');
		$(".coraltera2").addClass("blue");
		$(".coraltera1").removeClass("blue");
		$(".coraltera3").removeClass("blue");
		$(".coraltera4").removeClass("blue");
	}

	function team3() {
		$("#team-headshots").css('background-image','url(' + STATIC_URL + 'assets/img/team-michael-min.jpg)');
		$(".coraltera3").addClass("blue");
		$(".coraltera1").removeClass("blue");
		$(".coraltera2").removeClass("blue");
		$(".coraltera4").removeClass("blue");
	}

	function team4() {
		$("#team-headshots").css('background-image','url(' + STATIC_URL + 'assets/img/team-marine-min.jpg)');
		$(".coraltera4").addClass("blue");
		$(".coraltera1").removeClass("blue");
		$(".coraltera2").removeClass("blue");
		$(".coraltera3").removeClass("blue");
	}



	// Random team  //

	const team_delay = 2500;
	function loop(){
  $("#team-headshots").queue(function(next){
		  team1();
		  next();
	}).delay(team_delay).queue(function(next){
		  team2();
		  next();
	}).delay(team_delay).queue(function(next){
		  team3();
		  next();
	}).delay(team_delay).queue(function(next){
		  team4();
		  next();
	}).delay(team_delay).queue(function(next){
		  team4();
		  next();
	  loop();
	});

  }
  loop();



    $("#remi").on("mouseenter", function() {
		team1();
		$("#team-headshots").clearQueue();
    });

    $("#daniel").on("mouseenter", function() {
		team2();
		$("#team-headshots").clearQueue();
    });

    $("#michael").on("mouseenter", function() {
		team3();
		$("#team-headshots").clearQueue();
    });

    $("#marine").on("mouseenter", function() {
		team4();
		$("#team-headshots").clearQueue();
    });



	// Functions Home animation and menu //
	 function showlogo() {
    	$('.collogo').css("opacity","1");
    	$('.collogomobile').css("opacity","1");
	 }

	function hideall() {
    	$('.collogo').fadeOut(300);
    	$('.collogomobile').fadeOut(300);
    	$('.letra').fadeOut(300);
	 }

	function showmenu() {
		$("#home").addClass("fim");
		$("#homemobile").addClass("fim");
    $('body').css("overflow","initial");
		$('html').css("overflow","initial");
	 }

	function showimg() {
    	$(".homebg").addClass("inicio");
	 }

	function skiphome() {
    	$(".homebg").addClass("fim");
	 }

	 // use setTimeout() to execute
	 setTimeout(showimg, 4800);
	 setTimeout(showlogo, 5600);
   setTimeout(hideall, 10000);
   setTimeout(showmenu, 10000);


	$( ".iconmenu" ).click(function() {
		 myFunction(this);
	});

	$( ".skip" ).click(function() {
		 showmenu();
		 skiphome();
	});

	function myFunction(x) {
	  x.classList.toggle("change");
	}

	function preload() {
	 $(".menu-bg").removeClass("menu-bg-full");
	 $(".menu-bg2").removeClass("menu-bg-full");
	 $(".menu-bg3").removeClass("menu-bg-full");
	 $(".preloading").fadeIn(400);
	// $(".bgmenu").animate({ 'marginTop': '-200px' }, 300);
	}


	// Function unload menu animation //

	$('.vertical-el a').on("click", function (e) {
	  var url = this.href;

	  e.preventDefault();

	  myCustomEvent(function() {
		window.location = url;
	  });
	});



	function myCustomEvent(fn) {
	  setTimeout(function() {
		$(".menu-bg").removeClass("menu-bg-full");
	 	$(".menu-bg2").removeClass("menu-bg-full");
		$(".menu-bg3").removeClass("menu-bg-full");
		/*$(".bgmenu").delay(800).css("display","none");*/
		window.setTimeout(function(){$('.menucontainer').animate({'margin-top': '-100vh'}, 500);}, 100);
		$('body').css("overflow-y","auto");
		$('html').css("overflow-y","initial");
		$(".iconmenu").attr('data-click-state', 0);
		$(".iconmenu").removeClass("change");
		//	$( ".bgmenu" ).fadeTo( "300" , 0, function() {
   		// Animation complete.
		//  });
		$(".preloading").fadeIn(400);

		fn();
	  }, 1000);

	}

	$('.vertical-el a').click(function(event) {
    var href = this.href;

	event.preventDefault();

    preload(function() {

	$(".vertical-el a").unbind("click");
		window.location.href = href;
		});
	});

		$(".vertical-el a").on("click", function (e) {
	   e.preventDefault();
	   preload();
	});

	$(window).on('resize scroll', function() {
		$(".line").addClass("lineanim");
		$(".lineleft").addClass("lineanim");
	});


	// Function open and close menu //

	if ($(window).width() < 767) {
	   $(".iconmenu").on('click',function(){

	if($(this).attr('data-click-state') == 1) {
		$(this).attr('data-click-state', 0);
		$(".menu-bg").removeClass("menu-bg-full");
		$(".menu-bg2").removeClass("menu-bg-full");
		$(".menu-bg3").removeClass("menu-bg-full");
		window.setTimeout(function(){$('.menucontainer').animate({'margin-top': '-100vh'}, 500);}, 500);
		$('body').css("overflow-y","auto");
		$('html').css("overflow-y","initial");

	} else {
		$(this).attr('data-click-state', 1);
		$('.menucontainer').animate({'margin-top': '0px'}, 500);
		window.setTimeout(function(){$(".menu-bg3").addClass("menu-bg-full");}, 1800);
		window.setTimeout(function(){$(".menu-bg2").addClass("menu-bg-full");}, 1400);
		window.setTimeout(function(){$(".menu-bg").addClass("menu-bg-full");}, 1000);
		$('body').css("overflow-y","hidden");
		$('html').css("overflow-y","hidden");
	}
	});
	}
	else {
	   $(".iconmenu").on('click',function(){

	if($(this).attr('data-click-state') == 1) {
		$(this).attr('data-click-state', 0);
		$(".menu-bg").removeClass("menu-bg-full");
		$(".menu-bg2").removeClass("menu-bg-full");
		$(".menu-bg3").removeClass("menu-bg-full");
		window.setTimeout(function(){$('.menucontainer').animate({'margin-top': '-100vh'}, 500);}, 500);
		$('body').css("overflow-y","auto");
		$('html').css("overflow-y","initial");
	} else {
		$(this).attr('data-click-state', 1);
		$('.menucontainer').animate({'margin-top': '0px'}, 500);
		//$(".menu-bg").delay(1000).addClass("menu-bg-full");
		window.setTimeout(function(){$(".menu-bg3").addClass("menu-bg-full");}, 1000);
		window.setTimeout(function(){$(".menu-bg2").addClass("menu-bg-full");}, 1000);
		window.setTimeout(function(){$(".menu-bg").addClass("menu-bg-full");}, 1000);
		$('body').css("overflow-y","hidden");
		$('html').css("overflow-y","hidden");
	}
	});
	}

  });

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-left',
    inDuration: 500,
    outDuration: 200,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: true,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

$('#credits-block-desktop').on('shown.bs.collapse', function () {
    $('html, body').animate({
       scrollTop: $("#credits-block-desktop").offset().top
    }, 400, 'swing');
});

$('#credits-block-mobile').on('shown.bs.collapse', function () {
    $('html, body').animate({
       scrollTop: $("#credits-block-mobile").offset().top
    }, 400, 'swing');
});


$('#card-forestry').on('shown.bs.collapse', function () {
    $('html, body').animate({
       scrollTop: $("#card-forestry").offset().top - 68
    }, 400, 'swing');
});

$('#card-infrastructure').on('shown.bs.collapse', function () {
    $('html, body').animate({
       scrollTop: $("#card-infrastructure").offset().top - 68
    }, 400, 'swing');
});

$('#card-insurance').on('shown.bs.collapse', function () {
    $('html, body').animate({
       scrollTop: $("#card-insurance").offset().top - 68
    }, 400, 'swing');
});

$('#card-imagery').on('shown.bs.collapse', function () {
    $('html, body').animate({
       scrollTop: $("#card-imagery").offset().top - 68
    }, 400, 'swing');
});

$('#card-land-cover').on('shown.bs.collapse', function () {
    $('html, body').animate({
       scrollTop: $("#card-land-cover").offset().top - 68
    }, 400, 'swing');
});

$('#card-layers').on('shown.bs.collapse', function () {
    $('html, body').animate({
       scrollTop: $("#card-layers").offset().top - 68
    }, 400, 'swing');
});



$('.scroll-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 850);
});




$(window).scroll(function (event) {
        var y = $(this).scrollTop(); //set position from top when to change style in pixels
        if (y >= 170) {
            $('#nav-tesselo').addClass('resized');
        } else {
            $('#nav-tesselo').removeClass('resized');
        }
  });
