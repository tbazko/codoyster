(function iifeBase() {
	document.addEventListener('DOMContentLoaded', initialize.bind(this));

	function initialize() {
		var isFirefox = navigator.userAgent.toLowerCase()
			.indexOf('firefox') > -1;
		var menu = new Menu('js-menu-wrapper', 'js-menu-trigger');
		var parallax = document.getElementsByClassName('js-parallax');
		if (navigator.userAgent.toLowerCase()
			.indexOf('firefox') > -1 && parallax.length) {
			parallax[0].style.animation = 'none';
		}
		(function () {
			var throttle = function (type, name, obj) {
				obj = obj || window;
				var running = false;
				var func = function () {
					if (running) {
						return;
					}
					running = true;
					requestAnimationFrame(function () {
						obj.dispatchEvent(new CustomEvent(name));
						running = false;
					});
				};
				obj.addEventListener(type, func);
			};

			throttle("resize", "optimizedResize");
		})();

		menu.init();
	}
})();
