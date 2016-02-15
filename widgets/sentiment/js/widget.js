(function ($) {
    FXStreetWidgets.Widget.Sentiment = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.SentimentBase(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.MustacheKey = _this.loaderBase.config.WidgetName;
        
        return _this;
    };
}(FXStreetWidgets.$));