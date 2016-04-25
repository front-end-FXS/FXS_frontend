(function ($) {
    FXStreetWidgets.Widget.Technicals = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.TechnicalsBase(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.MustacheKey = _this.loaderBase.config.WidgetName;
        
        return _this;
    };
}(FXStreetWidgets.$));