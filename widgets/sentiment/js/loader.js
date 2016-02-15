(function ($) {
    FXStreetWidgets.Widget.LoaderSentiment = function () {
        var options = {
            WidgetName: "sentiment",
            EndPoint: "sentiment/study",
            EndPointTranslation: "sentiment/localization",
            DefaultHost: "http://markettools.api.fxstreet.com/",
            Mustaches: {
                "sentiment": "",
                "sentimentmini": ""
            }
        };

        var parent = FXStreetWidgets.Widget.LoaderBase(options),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.initWidgets = function () {
            var sentiments = $("div[fxs_widget][fxs_name='" + _this.config.WidgetName + "']");

            $.each(sentiments, function (i, sentiment) {
                var jSentiment = $(sentiment);

                var type = jSentiment.attr("fxs_type");

                var initJson = {
                    Container: jSentiment,
                    AssetId: jSentiment.attr("fxs_asset"),
                    WidgetId: i,
                    Seo: FXStreetWidgets.Util.isUndefined(jSentiment.attr("fxs_seo")) ? false : true
                };
                
                if (FXStreetWidgets.Util.isUndefined(initJson.AssetId) || !initJson.AssetId.startsWith('fxs-')) {
                    console.log("fxserror unable to create " + _this.config.WidgetName + ", asset not valid: " + initJson.AssetId);
                } else {
                    var widget = type === "mini" ? FXStreetWidgets.Widget.SentimentMini(_this) : new FXStreetWidgets.Widget.Sentiment(_this);
                    widget.init(initJson);
                }
            });
        };

        return _this;
    };

    (function () {
        var loader = new FXStreetWidgets.Widget.LoaderSentiment();
        loader.init();
    })();
}(FXStreetWidgets.$));