

;(function ($) {
	'use strict';

	$.HSCore.components.HSMask = {
		defaults: {
			template: null
		},

		init: function (el, options) {
			if (!el.length || el.attr('data-hs-mask-options') === undefined) return;

			var context = this,
				defaults = Object.assign({}, context.defaults),
				dataSettings = el.attr('data-hs-mask-options') ? JSON.parse(el.attr('data-hs-mask-options')) : {},
				settings = {};
			settings = $.extend(true, defaults, settings, dataSettings, options);

			/* Start : Init */

			var newMask = el.mask(settings.template, settings);

			/* End : Init */

			return newMask;
		}
	};

})(jQuery);
