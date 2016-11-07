(function iifeBase($) {
  $(document).ready(function() {
    var menu = new Menu('.menu-wrapper', '.menu-trigger');
    menu.init();
  });
  
  function Menu(menuClass, triggerClass, options) {
    this.$menu = $(menuClass);
    this.$trigger = $(triggerClass);
    this.$container = $('.js-main-container');
  }

  Menu.prototype.init = function() {
    this.bindEvents();
  }

  Menu.prototype.bindEvents = function() {
    this.$trigger.on('click', this.toggleMenu.bind(this));
  }

  Menu.prototype.toggleMenu = function() {
    this.$menu.toggleClass('is-active');
    this.$trigger.toggleClass('is-active');
    this.$container.toggleClass('is-active-menu');
  }
})(jQuery);
