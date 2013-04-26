(function ($) {
  $(document).ready(function() {

// When the word "breathe" is clicked, show the navigation
    $('.stepone').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').addClass('nav-showing');
    });

// When the small circle is clicked, show the navigation
    $('nav.nav-placeholder').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass('nav-collapsed').addClass('nav-showing');
    });

// Any time any navigation icon is clicked, shrink the navigation into the corner & show the new panel
    $('nav a.breathing-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass().addClass('breathing-on nav-collapsed');
    });
    $('nav a.beingpresent-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass().addClass('beingpresent-on nav-collapsed');
    });
    $('nav a.mediating-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass().addClass('mediating-on nav-collapsed');
    });
    $('nav a.connecting-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass().addClass('connecting-on nav-collapsed');
    });
    $('nav a.hiding-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass().addClass('hiding-on nav-collapsed');
    });
    $('nav a.disconnecting-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass().addClass('disconnecting-on nav-collapsed');
    });
    $('nav a.looking-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass().addClass('looking-on nav-collapsed');
    });
    $('nav a.feeling-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      $(this).parents('body').removeClass().addClass('feeling-on nav-collapsed');
    });    
    
  });
})(jQuery);
