(function ($) {
    FXStreetWidgets.Widget.HeatMap = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.HeatMapBase(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.MustacheKey = _this.loaderBase.config.WidgetName;

        return _this;
    };
}(FXStreetWidgets.$));