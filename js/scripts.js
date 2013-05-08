(function ($) {
  $(document).ready(function() {

//$.History.bind(function(state){
//    $.History.go(state);
//    });

// When the word "breathe" is clicked, show the navigation
    $('.stepone').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass('nav-collapsed').addClass('nav-showing');
    });

// When the small circle is clicked, show the navigation
    $('.nav-placeholder').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass('nav-collapsed').addClass('nav-showing');
    });
 
// Bind a handler for state: breathing
    $.History.bind('/breathing',function(state){
      $('body').removeClass().addClass('breathing-on nav-collapsed');
         });
    $('nav a.breathing-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/breathing');
    });

// Bind a handler for state: beingpresent
    $.History.bind('/beingpresent',function(state){
      $('body').removeClass().addClass('beingpresent-on nav-collapsed');
    });
    $('nav a.beingpresent-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/beingpresent');
    });

// Bind a handler for state: mediating
    $.History.bind('/mediating',function(state){
      $('body').removeClass().addClass('mediating-on nav-collapsed');
    });
    $('nav a.mediating-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/mediating');
    });

// Bind a handler for state: connecting
    $.History.bind('/connecting',function(state){
      $('body').removeClass().addClass('connecting-on nav-collapsed');
    });
    $('nav a.connecting-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/connecting');
    });

// Bind a handler for state: hiding
    $.History.bind('/hiding',function(state){
      $('body').removeClass().addClass('hiding-on nav-collapsed');
    });
    $('nav a.hiding-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/hiding');
    });
    
// Bind a handler for state: disconnecting
    $.History.bind('/disconnecting',function(state){
      $('body').removeClass().addClass('disconnecting-on nav-collapsed');
    });
    $('nav a.disconnecting-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/disconnecting');
    });
    
// Bind a handler for state: hiding
    $.History.bind('/hiding',function(state){
      $('body').removeClass().addClass('hiding-on nav-collapsed');
    });
    $('nav a.hiding-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/hiding');
    });
    
// Bind a handler for state: looking
    $.History.bind('/looking',function(state){
      $('body').removeClass().addClass('looking-on nav-collapsed');
    });
    $('nav a.looking-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/looking');
    });

// Bind a handler for state: feeling
    $.History.bind('/feeling',function(state){
      $('body').removeClass().addClass('feeling-on nav-collapsed');
    });
    $('nav a.feeling-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/feeling');
    });

// Bind a handler for state: home
    $.History.bind('/animation',function(state){
      $('body').removeClass().addClass('start nav-collapsed');
    });
    $('nav a.animation-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $.History.go('/animation');
    });


// Switch classes to trigger flip of content
		$('.card').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});			

  });
})(jQuery);
