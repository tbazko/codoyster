(function iifeFrontPage($) {
  $(document).ready(function() {
    var hasTouch = !!('ontouchstart' in window || navigator.msMaxTouchPoints || /touch/i.test(navigator.userAgent));

    if(!hasTouch && window.innerWidth > 768) {
      var slider = new Slider('.js-slider', {delay: 9000, autoplay: true});
      slider.init();
    }
  });
})(jQuery);
