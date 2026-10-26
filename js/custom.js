(function($) {
    "use strict";
    var MASCOTSWITCHER = {};
    var $document = $(document);

    MASCOTSWITCHER.initialize = {
        init: function() {
            MASCOTSWITCHER.initialize.TM_demoSwitcher();
        },

        TM_demoSwitcher: function() {
            var showSwitcher = false; // Disabled for static production site
            var $style_switcher = $('#style-switcher');
            if( !$style_switcher.length && showSwitcher && window.MascotCoreAjaxUrl ) {
                var ajaxData = {
                    'action': 'mascot_color_switcher_get_demo_switcher'
                };
                $.ajax({
                    url: MascotCoreAjaxUrl,
                    data: ajaxData,
                    success: function (data) { $( "body" ).append(data); },
                    dataType: 'html'
                });
            }
        }
    };

    MASCOTSWITCHER.documentOnReady = {
        init: function() {
            MASCOTSWITCHER.initialize.init();
        }
    };

    $document.ready(
        MASCOTSWITCHER.documentOnReady.init
    );

})(jQuery);
