(function ($) {
    FXStreetWidgets.Widget.LoaderTechnicals = function () {
        var options = {
            WidgetName: "technicals",
            EndPoint: "technicals/getstudy",
            EndPointTranslation: "technicals/getlocalization",
            DefaultHost: "http://technicals.api.fxstreet.com/",
            Mustaches: {
                "technicals": "",
                "technicalsmini": ""
            }
        };

        var parent = FXStreetWidgets.Widget.LoaderBase(options),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.initWidgets = function () {
            var technicals = $("div[fxs_widget][fxs_name='" + _this.config.WidgetName + "']");

            $.each(technicals, function (i, technical) {
                var jTechnicals = $(technical);

                var type = jTechnicals.attr("fxs_type");

                var initJson = {
                    Container: jTechnicals,
                    Pair: jTechnicals.attr("fxs_pair"),
                    WidgetId: i,
                    Seo: FXStreetWidgets.Util.isUndefined(jTechnicals.attr("fxs_seo")) ? false : true
                };
                
                if (FXStreetWidgets.Util.isUndefined(initJson.Pair) || initJson.Pair.length !== 6) {
                    console.log("fxserror unable to create " + _this.config.WidgetName + ", pair not valid: " + initJson.Pair);
                } else {
                    var widget = type === "mini" ? FXStreetWidgets.Widget.TechnicalsMini(_this) : new FXStreetWidgets.Widget.Technicals(_this);
                    widget.init(initJson);
                }
            });
        };

        return _this;
    };

    (function () {
        var loader = new FXStreetWidgets.Widget.LoaderTechnicals();
        loader.init();
    })();
}(FXStreetWidgets.$));