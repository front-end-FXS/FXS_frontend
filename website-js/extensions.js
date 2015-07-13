(function () {
    String.prototype.format = function () {
        var str = this;
        for (var i = 0; i < arguments.length; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            str = str.replace(reg, arguments[i]);
        }
        return str;
    };
    Array.prototype.findFirst = function (validateCb) {
        var i;
        for (i = 0; i < this.length; ++i) {
            if (validateCb(this[i], i))
                return this[i];
        }
        return null;
    };
    Array.prototype.removeFirst = function (validateCb) {
        var i;
        for (i = 0; i < this.length; ++i) {
            if (validateCb(this[i], i)) {
                this.splice(i, 1);
                return true;
            }
        }
        return false;
    };
}());