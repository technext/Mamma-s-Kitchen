$(document).ready(function() {

/*=================================
||			add/remove Class
==================================*/
/*	var changeStyle = $('.navigationbar');
    var top = $('.top');
	function scroll() {
		if ($(window).scrollTop() > 700) {
			changeStyle.addClass('modified');
            top.addClass('show-top');

		} else {
			changeStyle.removeClass('modified');
            top.removeClass('show-top');
		}
	}
	document.onscroll = scroll;
*/
/*=================================
||			hide/show
==================================*/

/*	$("#iconhideshow").click(function(){
	    $(this).toggleClass('fa-bars fa-times-circle');
	    $(".nav").toggleClass('hide show');
	});*/
/*=================================
||			Radial Progressive Bar
==================================*/
	/*$('.demo-4').percentcircle({
	animate : true,
	diameter : 100,
	guage: 3,
	coverBg: 'rgb(48, 43, 56)',
	bgColor: '#e64e4e',
	fillColor: '#e64e4e',
	percentSize: '18px',
	percentWeight: 'normal'
	});
*/
/*=================================
||			Owl Carousel
==================================*/
    $("#header-slider").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 100,
        paginationSpeed : 400,
        singleItem: true,
        autoPlay: true,
        pagination: false,

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
/*=================================
||          Nivo-lightbox
==================================*/
/*
    $('.portfolio-item').nivoLightbox({
            effect: 'fade',                             // The effect to use when showing the lightbox
            theme: 'default',                             // The lightbox theme to use
            keyboardNav: true,                             // Enable/Disable keyboard navigation (left/right/escape)
            clickOverlayToClose: true,                    // If false clicking the "close" button will be the only way to close the lightbox
            onInit: function(){},                         // Callback when lightbox has loaded
            beforeShowLightbox: function(){},             // Callback before the lightbox is shown
            afterShowLightbox: function(lightbox){},     // Callback after the lightbox is shown
            beforeHideLightbox: function(){},             // Callback before the lightbox is hidden
            afterHideLightbox: function(){},             // Callback after the lightbox is hidden
            onPrev: function(element){},                 // Callback when the lightbox gallery goes to previous item
            onNext: function(element){},                 // Callback when the lightbox gallery goes to next item
            errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
        });
*/
/*=================================
||			Isotope
==================================*/
	/*// init Isotope
	var $container = $('#works_container').isotope({
	  // options
	});
	// filter items on button click
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});
*/

}); //(document).ready(function() closed
/*=================================
||			WOW
==================================*/
wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
wow.init();

/*=================================
||			Smooth Scrooling
==================================*/
	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	            if (target.length) {
	                $('html,body').animate({
	                	scrollTop: (target.offset().top - 65)//top navigation height
	                }, 1000);
	                return false;
	            }
	        }
	    });
	});

	
/*=================================
||			Contact form
==================================*/

jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            answer: {
                required: true,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "come on, you have a name don't you?",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "no email, no message"
            },
            message: {
                required: "um...yea, you have to write something to send this form.",
                minlength: "thats all? really?"
            },
            answer: {
                required: "sorry, wrong answer!"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"contact.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});

/*====================================================================
            Navbar shrink script
======================================================================*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } 
        else {
            $('nav').removeClass('shrink');
        }
    });
});


$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $("#logo").attr("src", "images/Logo_stick.png")
        }
        else {
             $("#logo").attr("src", "images/Logo_main.png")
        }
    });
});
/*=================================================================
            Load more button
===================================================================*/

$(document).ready(function () {
    $("#loadMenuContent").click(function() {
        
        $.get("php/ajax_menu.html", function(data){
            $('#moreMenuContent').append(data);
        });
    }) ;
});

$(document).ready(function () {

    var $menuPricing = $('#menu-pricing');
    $menuPricing.mixItUp({
        selectors: {
            target: 'li'
        }
    });

    /*$("#loadPricingContent").click(function() {
        
        $.get("php/ajax_pricing.html", function(data){
            console.log("fuck you");
             $menuPricing.mixItUp('append', $(data), {filter: 'all'}, function(){
                console.log("dadsf");
             })
        });
    }) ;*/
});