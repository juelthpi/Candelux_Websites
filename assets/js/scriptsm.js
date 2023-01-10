$(document).ready(function(){
	// Mobile Menu
	$('.logo_mobile_icon a').click(function(){
		$('.menu_main').fadeToggle(500);

		return false
	});
	$('.owl_1').owlCarousel({
		loop:true,
		// margin:2,   
		responsiveClass:true,autoplayHoverPause:true,
		autoplay:true,
		 slideSpeed: 400,
		  paginationSpeed: 400,
		 autoplayTimeout:3000,
		 navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
			0:{
				items:4,
				nav:true,
				dots:false,
				  loop:true
			},
			600:{
				items:4,
				dots:false,
				nav:true,
				  loop:true
			},
			1000:{
				items:4,
				dots:false,
				nav:true,
				loop:true
			}
		}
	});
	
	$('.test-popup-link').magnificPopup({
		type: 'image'
		// other options
	  });
	$('.menu_close_icon a').click(function(){
		$('.menu_main').fadeToggle(500);

		return false
	});


	// Banner Search
	$('.home_page_search_left').click(function(){
		$('.home_page_search_left_pos').slideToggle(200);

		return false
	});
	// Banner Search Mobile
	$('.home_accordion_item_btn').click(function(){
		$('.hamp1').toggle();
		$('.hamp2').toggle();

		return false
	});


	// Properties page search btn option
	$('.properties_banner_btn2').click(function(){
		$('.properties_banner_btn_pos').slideToggle(300);

		return false
	});
	$('.pbbpc_link a img').click(function(){
		$('.properties_banner_btn_pos').slideToggle(300);

		return false
	});




	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });




	// Scroll Header
	$(window).scroll(function(){
		var scrollValue = $(this).scrollTop();

		if(scrollValue>200){
			$('.header_main').addClass('header_main_fexed');
			$('.properties_menu_home').addClass('properties_menu_color');
			$('.menu_close_icon').addClass('menu_close_icon2');
			$('.logo_mobile_icon').addClass('logo_mobile_icon_scolor');
			$('.f11_menu_btn_desktop').addClass('f11_menu_btn_border');
			$('.logos_image_1st').hide();
			$('.logos_image_2nd').show();
			// $('.logo_mobile_iconb').show();
			// $('.logo_mobile_icon').hide();

		}
		else{
			$('.header_main').removeClass('header_main_fexed');
			$('.header_main').removeClass('header_main_fexed');
			$('.properties_menu_home').removeClass('properties_menu_color');
			$('.menu_close_icon').removeClass('menu_close_icon2');
			$('.logo_mobile_icon').removeClass('logo_mobile_icon_scolor');
			$('.f11_menu_btn_desktop').removeClass('f11_menu_btn_border');
			$('.logos_image_2nd').hide();
			$('.logos_image_1st').show();
			// $('.logo_mobile_iconb').hide();
			// $('.logo_mobile_icon').show();
		}
	});


	// book form popup (frame11 page)
	$('.f11_menu_btn a').click(function(){
		$('.book_show_popup_main').fadeToggle(300);

		return false
	});
	$('.online_close_btn a').click(function(){
		$('.book_show_popup_main').fadeToggle(300);

		return false
	});



});




function cycleBackgrounds() {
    var index = 0;
 
    $imageEls = $('.Slider .Slider-slide'); // Get the images to be cycled.
 
    setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        
        // Show the next
        $imageEls.eq(index).addClass('show');
        
        // Hide the previous
        $imageEls.eq(index - 1).removeClass('show');
    }, 4000);
};
 
// Document Ready.
$(function () {
    cycleBackgrounds();
});




// f11 Slider
var $slider = $('.slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}





// Accordion (frame11 page)
let accordionButtons = document.getElementsByClassName('accordion-item__button');


for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let accordionContent = this.nextElementSibling;
        
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
        }
         else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
    });
}

		
	// AOS Animation
    AOS.init();

	// aboutus page
	$( function() {
		$( "#about_us_services_tab").tabs();
		$( "#about_us_team_area").tabs();
	  } );
	  var acc = document.getElementsByClassName("accordion");
		  var i;
	
		  for (i = 0; i < acc.length; i++) {
		  acc[i].addEventListener("click", function() {
			  /* Toggle between adding and removing the "active" class,
			  to highlight the button that controls the panel */
			  this.classList.toggle("active");
	
			  /* Toggle between hiding and showing the active panel */
			  var panel = this.nextElementSibling;
			  if (panel.style.display === "block") {
			  panel.style.display = "none";
			  } else {
			  panel.style.display = "block";
			  }
		  });
		  }
        // about us page end