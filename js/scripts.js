var deparam = function (querystring) {
  // remove any preceding url and split
  querystring = querystring.substring(querystring.indexOf('?')+1).split('&');
  var params = {}, pair, d = decodeURIComponent;
  // march and parse
  for (var i = querystring.length - 1; i >= 0; i--) {
    pair = querystring[i].split('=');
    if (pair.length > 1) {
      pair[1] = pair[1].replace('/',''); // please, no '/' in state names
    }
    params[d(pair[0])] = d(pair[1]);
  }

  return params;
};//--  fn  deparam


(function ($) {
  $(document).ready(function() {

    // Establish Variables
    var
    History = window.History,
    State = History.getState();
    var stateHash = deparam(State.hash);

    // Bind to State Change
    History.Adapter.bind(window,'statechange',function(){
    // Log the State
      var State = History.getState();
      var cssClass = State.data['class'] + '-on nav-collapsed';
      $('body').removeClass().addClass(cssClass);
    });

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

    $('nav a.breathing-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'breathing'}, null, "?state=breathing");
    });

    $('nav a.beingpresent-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'beingpresent'}, null, "?state=beingpresent");
    });

    $('nav a.meditating-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'meditating'}, null, "?state=meditating");
    });

    $('nav a.connecting-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'connecting'}, null, "?state=connecting");
    });

    $('nav a.hiding-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'hiding'}, null, "?state=hiding");
    });

    $('nav a.disconnecting-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'disconnecting'}, null, "?state=disconnecting");
    });

    $('nav a.looking-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'looking'}, null, "?state=looking");
    });

    $('nav a.feeling-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'feeling'}, null, "?state=feeling");
    });

    $('nav a.animating-link').on('click', function (evt) {
      evt.preventDefault();
      evt.stopPropagation();
      History.pushState({'class':'animating'}, null, "?state=animating");
    });

    if (stateHash['state'] != undefined) { // we have an initial state
      History.replaceState({'class': stateHash['state']}, null, State.hash);
      $(window).trigger('statechange');
    }

// Switch classes to trigger flip of content

		$('.card').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});

  });
})(jQuery);
