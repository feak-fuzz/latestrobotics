AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

jQuery(document).ready(function($) {

   "use strict";

   

   var siteMenuClone = function() {

	   $('.js-clone-nav').each(function() {
		   var $this = $(this);
		   $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
	   });


	   setTimeout(function() {
		   
		   var counter = 0;
	 $('.site-mobile-menu .has-children').each(function(){
	   var $this = $(this);
	   
	   $this.prepend('<span class="arrow-collapse collapsed">');

	   $this.find('.arrow-collapse').attr({
		 'data-toggle' : 'collapse',
		 'data-target' : '#collapseItem' + counter,
	   });

	   $this.find('> ul').attr({
		 'class' : 'collapse',
		 'id' : 'collapseItem' + counter,
	   });

	   counter++;

	 });

   }, 1000);

	   $('body').on('click', '.arrow-collapse', function(e) {
	 var $this = $(this);
	 if ( $this.closest('li').find('.collapse').hasClass('show') ) {
	   $this.removeClass('active');
	 } else {
	   $this.addClass('active');
	 }
	 e.preventDefault();  
	 
   });

	   $(window).resize(function() {
		   var $this = $(this),
			   w = $this.width();

		   if ( w > 768 ) {
			   if ( $('body').hasClass('offcanvas-menu') ) {
				   $('body').removeClass('offcanvas-menu');
			   }
		   }
	   })

	   $('body').on('click', '.js-menu-toggle', function(e) {
		   var $this = $(this);
		   e.preventDefault();

		   if ( $('body').hasClass('offcanvas-menu') ) {
			   $('body').removeClass('offcanvas-menu');
			   $this.removeClass('active');
		   } else {
			   $('body').addClass('offcanvas-menu');
			   $this.addClass('active');
		   }
	   }) 

	   // click outisde offcanvas
	   $(document).mouseup(function(e) {
	   var container = $(".site-mobile-menu");
	   if (!container.is(e.target) && container.has(e.target).length === 0) {
		 if ( $('body').hasClass('offcanvas-menu') ) {
				   $('body').removeClass('offcanvas-menu');
			   }
	   }
	   });
   }; 
   siteMenuClone();


   var sitePlusMinus = function() {
	   $('.js-btn-minus').on('click', function(e){
		   e.preventDefault();
		   if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
			   $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
		   } else {
			   $(this).closest('.input-group').find('.form-control').val(parseInt(0));
		   }
	   });
	   $('.js-btn-plus').on('click', function(e){
		   e.preventDefault();
		   $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
	   });
   };
   // sitePlusMinus();


   var siteSliderRange = function() {
   $( "#slider-range" ).slider({
	 range: true,
	 min: 0,
	 max: 500,
	 values: [ 75, 300 ],
	 slide: function( event, ui ) {
	   $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	 }
   });
   $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	 " - $" + $( "#slider-range" ).slider( "values", 1 ) );
   };
   // siteSliderRange();


   
   var siteCarousel = function () {
	   if ( $('.nonloop-block-13').length > 0 ) {
		   $('.nonloop-block-13').owlCarousel({
		   center: false,
		   items: 1,
		   loop: true,
			   stagePadding: 0,
		   margin: 0,
		   autoplay: true,
		   nav: true,
			   navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		   responsive:{
		   600:{
			   margin: 0,
			   nav: true,
			 items: 2
		   },
		   1000:{
			   margin: 0,
			   stagePadding: 0,
			   nav: true,
			 items: 3
		   },
		   1200:{
			   margin: 0,
			   stagePadding: 0,
			   nav: true,
			 items: 4
		   }
		   }
		   });
	   }


	   if ( $('.nonloop-block-14').length > 0 ) {
		   $('.nonloop-block-14').owlCarousel({
		   center: false,
		   items: 1,
		   loop: true,
			   stagePadding: 0,
		   margin: 0,
		   autoplay: true,
		   nav: true,
			   navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		   responsive:{
		   600:{
			   margin: 20,
			   nav: true,
			 items: 2
		   },
		   1000:{
			   margin: 30,
			   stagePadding: 0,
			   nav: true,
			 items: 2
		   },
		   1200:{
			   margin: 30,
			   stagePadding: 0,
			   nav: true,
			 items: 3
		   }
		   }
		   });
	   }

	   $('.slide-one-item').owlCarousel({
	   center: false,
	   items: 1,
	   loop: true,
		   stagePadding: 0,
	   margin: 0,
	   autoplay: true,
	   pauseOnHover: false,
	   nav: true,
	   navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	 });
   };
   siteCarousel();

   var siteStellar = function() {
	   $(window).stellar({
	   responsive: false,
	   parallaxBackgrounds: true,
	   parallaxElements: true,
	   horizontalScrolling: false,
	   hideDistantElements: false,
	   scrollProperty: 'scroll'
	 });
   };
   siteStellar();

   var siteCountDown = function() {

	   $('#date-countdown').countdown('2020/10/10', function(event) {
		 var $this = $(this).html(event.strftime(''
		   + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		   + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		   + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		   + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		   + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
	   });
			   
   };
   siteCountDown();

   var siteDatePicker = function() {

	   if ( $('.datepicker').length > 0 ) {
		   $('.datepicker').datepicker();
	   }

   };
   siteDatePicker();

   var siteSticky = function() {
	   $(".js-sticky-header").sticky({topSpacing:0});
   };
   siteSticky();

   // navigation
 var OnePageNavigation = function() {
   var navToggler = $('.site-menu-toggle');
	  $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
	 e.preventDefault();

	 var hash = this.hash;

	 $('html, body').animate({
	   'scrollTop': $(hash).offset().top
	 }, 600, 'easeInOutCirc', function(){
	   window.location.hash = hash;
	 });

   });
 };
 OnePageNavigation();

 var siteScroll = function() {

	 

	 $(window).scroll(function() {

		 var st = $(this).scrollTop();

		 if (st > 100) {
			 $('.js-sticky-header').addClass('shrink');
		 } else {
			 $('.js-sticky-header').removeClass('shrink');
		 }

	 }) 

 };
   siteScroll();

   $(function () {
	   $("#bgndVideo").YTPlayer();
   });
	   
});





(function ($) {
   $.fn.countTo = function (options) {
	   options = options || {};
	   
	   return $(this).each(function () {
		   // set options for current element
		   var settings = $.extend({}, $.fn.countTo.defaults, {
			   from:            $(this).data('from'),
			   to:              $(this).data('to'),
			   speed:           $(this).data('speed'),
			   refreshInterval: $(this).data('refresh-interval'),
			   decimals:        $(this).data('decimals')
		   }, options);
		   
		   // how many times to update the value, and how much to increment the value on each update
		   var loops = Math.ceil(settings.speed / settings.refreshInterval),
			   increment = (settings.to - settings.from) / loops;
		   
		   // references & variables that will change with each update
		   var self = this,
			   $self = $(this),
			   loopCount = 0,
			   value = settings.from,
			   data = $self.data('countTo') || {};
		   
		   $self.data('countTo', data);
		   
		   // if an existing interval can be found, clear it first
		   if (data.interval) {
			   clearInterval(data.interval);
		   }
		   data.interval = setInterval(updateTimer, settings.refreshInterval);
		   
		   // initialize the element with the starting value
		   render(value);
		   
		   function updateTimer() {
			   value += increment;
			   loopCount++;
			   
			   render(value);
			   
			   if (typeof(settings.onUpdate) == 'function') {
				   settings.onUpdate.call(self, value);
			   }
			   
			   if (loopCount >= loops) {
				   // remove the interval
				   $self.removeData('countTo');
				   clearInterval(data.interval);
				   value = settings.to;
				   
				   if (typeof(settings.onComplete) == 'function') {
					   settings.onComplete.call(self, value);
				   }
			   }
		   }
		   
		   function render(value) {
			   var formattedValue = settings.formatter.call(self, value, settings);
			   $self.html(formattedValue);
		   }
	   });
   };
   
   $.fn.countTo.defaults = {
	   from: 0,               // the number the element should start at
	   to: 0,                 // the number the element should end at
	   speed: 1000,           // how long it should take to count between the target numbers
	   refreshInterval: 100,  // how often the element should be updated
	   decimals: 0,           // the number of decimal places to show
	   formatter: formatter,  // handler for formatting the value before rendering
	   onUpdate: null,        // callback method for every time the element is updated
	   onComplete: null       // callback method for when the element finishes updating
   };
   
   function formatter(value, settings) {
	   return value.toFixed(settings.decimals);
   }
}(jQuery));

jQuery(function ($) {
 // custom formatting example
 $('.count-number').data('countToOptions', {
   formatter: function (value, options) {
	 return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
   }
 });
 
 // start all the timers
 $('.timer').each(count);  
 
 function count(options) {
   var $this = $(this);
   options = $.extend({}, options || {}, $this.data('countToOptions') || {});
   $this.countTo(options);
 }
});




/*THIS IS FOR OUR PATNER SLIDER*/
$(document).ready(function(){
   $('.customer-logos').slick({
	   slidesToShow: 6,
	   slidesToScroll: 1,
	   autoplay: true,
	   autoplaySpeed: 1500,
	   arrows: false,
	   dots: false,
	   pauseOnHover: false,
	   responsive: [{
		   breakpoint: 768,
		   settings: {
			   slidesToShow: 4
		   }
	   }, {
		   breakpoint: 520,
		   settings: {
			   slidesToShow: 3
		   }
	   }]
   });
});


