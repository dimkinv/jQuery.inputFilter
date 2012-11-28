if ($) {
    (function ($) {
        $.fn.inputFilter = function (options) {
            var that = this;
            var methods = {
                onlyNumbers: function () {
                    that.keypress(function (evt) {
                        var key = evt.keyCode;
                        if (key > 31 && (key < 48 || key > 57))
                            return false;
                        return true;
                    });
                    return that;
                },
                onlyEnglish: function () {
                    that.keypress(function (evt) {
                        var key = evt.keyCode;
                        if ((key > 64 && key < 91) || (key > 96 && key < 123) || (key == 32))
                            return true;
                        return false;
                    });
                    return that;
                }
            };

            var settings = $.extend({
                type: 'onlyNumbers',
                includeSpecialChars: false
            }, options);

            if (methods[settings.type]) {
                return methods[settings.type]();
            }

        };
    })(jQuery);
}
var MiscUtilities = function () { };
