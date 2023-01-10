$(document).ready(function(){
	
	 
	$('.propety_filder_innter').slick({
		 
		slidesToShow: 4,
		slidesToScroll: 2,
		 
		  
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		
	  });
	  
	   
	$('.mobile_al_show').click(function(){
			$('.filder_menu ul').toggle( );
	
	
		 });
	
 
	$( "#tabss" ).tabs();
	$( "#adds").datepicker();
	$( "#adds" ).datepicker();
	$( "#addsa" ).datepicker();
	$( "#chekc_indate").datepicker();
	$( "#check_out_date").datepicker();

	
	

});

 
    $(window).load(function() {
        $('#slider').nivoSlider({
			manualAdvance:true,
			prevText:'<div class="btnva nivo_cus"></div>',
			nextText:'<div class="right_btnva nivo_cus"></div>',

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
    }, 8000);
};
 
// Document Ready.
$(function () {
    cycleBackgrounds();
});


