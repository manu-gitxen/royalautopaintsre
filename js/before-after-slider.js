(function ($) {
    'use strict';

    function initBeforeAfterSlider($scope) {
        var $containers = $scope.find('.twentytwenty-container').add($scope.filter('.twentytwenty-container'));

        if (!$.isFunction($.fn.twentytwenty) || $containers.length === 0) {
            return;
        }

        $containers.each(function () {
            var $this = $(this);

            if ($this.parent().hasClass('twentytwenty-wrapper')) {
                return;
            }

            var data_offset_pct = ($this.data('offset-percent') === undefined) ? 0.5 : parseFloat($this.data('offset-percent'));
            var data_orientation = ($this.data('orientation') === undefined) ? 'horizontal' : $this.data('orientation');
            var data_before_label = ($this.data('before-label') === undefined) ? 'Before' : $this.data('before-label');
            var data_after_label = ($this.data('after-label') === undefined) ? 'After' : $this.data('after-label');
            var data_no_overlay = $this.data('no-overlay');

            if (data_no_overlay === undefined) {
                data_no_overlay = true;
            } else {
                data_no_overlay = data_no_overlay === 'yes' || data_no_overlay === true || data_no_overlay === 'true';
            }

            $this.twentytwenty({
                default_offset_pct: data_offset_pct,
                orientation: data_orientation,
                before_label: data_before_label,
                after_label: data_after_label,
                no_overlay: data_no_overlay
            });

            $this.find('img').on('load', function () {
                $(window).trigger('resize.twentytwenty');
            });
        });
    }

    $(window).on('elementor/frontend/init', function () {
        if (typeof elementorFrontend !== 'undefined') {
            elementorFrontend.hooks.addAction('frontend/element_ready/tm-ele-before-after-slider.default', initBeforeAfterSlider);
        }
    });

    $(document).ready(function () {
        initBeforeAfterSlider($(document.body));
    });

})(jQuery);
