(function (jQuery) {
    jQuery.fn.removeAllAttributes = function () {
        return this.each(function () {
            var attributes = $.map(this.attributes, function (item) {
                return item.name;
            });
            var img = $(this);
            $.each(attributes, function (i, item) {
                img.removeAttr(item);
            });
        });
    };
    jQuery.extend({
        findFirst: function (elems, validateCb) {
            var i;
            for (i = 0 ; i < elems.length ; ++i) {
                if (validateCb(elems[i], i))
                    return elems[i];
            }
            return null;
        },
        removeFirst: function (elems, validateCb) {
            var i;
            for (i = 0 ; i < elems.length ; ++i) {
                if (validateCb(elems[i], i)) {
                    elems.splice(i, 1);
                    return true;
                }
            }
            return false;
        },
    });
})(jQuery);