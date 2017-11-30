// JavaScript Document

var slider = {

  // Not sure if keeping element collections like this
  // together is useful or not.
  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav > a")
  },

  timing: 800,
  slideWidth: 700, // could measure this

  // In this simple example, might just move the
  // binding here to the init function
  init: function() {
    this.bindUIEvents();
  },

  bindUIEvents: function() {
    // ... or click a thing
    this.el.sliderNav.on("click", "a", function(event) {
      slider.handleNavClick(event, this);
    });
    // What would be cool is if it had touch
    // events where you could swipe but it
    // also kinda snapped into place.
  },

  handleNavClick: function(event, el) {
    event.preventDefault();
    var position = $(el).attr("href").split("-").pop();

    this.el.slider.animate({
      scrollLeft: position * this.slideWidth
    }, this.timing);

    this.changeActiveNav(el);
  },

  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("active");
    $(el).addClass("active");
  }

};

slider.init();
