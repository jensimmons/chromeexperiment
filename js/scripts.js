(function ($) {
  $(document).ready(function() {
  
    $('.fliplinkone').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').addClass('nav-showing');
    });

    $('.breathing-link').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass().addClass('breathing-on nav-collapsed');
    });

    $('.beingpresent-link').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass().addClass('beingpresent-on nav-collapsed');
    });

    $('.mediating-link').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass().addClass('mediating-on nav-collapsed');
    });

    $('.connecting-link').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass().addClass('connecting-on nav-collapsed');
    });

    $('.disconnecting-link').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass().addClass('disconnecting-on nav-collapsed');
    });

    $('.looking-link').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass().addClass('looking-on nav-collapsed');
    });

    $('.feeling-link').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass().addClass('feeling-on nav-collapsed');
    });
    
    
  });
})(jQuery);
