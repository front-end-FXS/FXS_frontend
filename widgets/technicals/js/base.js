(function ($) {
    FXStreetWidgets.Widget.TechnicalsBase = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.Base(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        _this.Container = null;
        _this.Pair = "";
        _this.WidgetId = null;
        _this.Seo = false;
        _this.MustacheKey = "";

        _this.TrendCssClasess = {
            StronglyBearish: "fxs_txt_danger",
            Bearish: "fxs_txt_danger",
            Neutral: "fxs_txt_neutral",
            Bullish: "fxs_txt_success",
            SlightlyBullish: "fxs_txt_success"
        };

        _this.ObOsCssClasess = {
            Oversold: "fxs_txt_warning",
            Neutral: "fxs_txt_neutral",
            Overbought: "fxs_txt_warning"
        };

        _this.VolatilityCssClasess = {
            Expanding: "fxs_txt_neutral",
            High: "fxs_txt_warning",
            Low: "fxs_txt_warning",
            Shrinking: "fxs_txt_neutral"
        };

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.loadDataFromUrl(_this.loaderBase.config.EndPoint + "/" + _this.Pair);
        };

        _this.renderHtml = function () {
            var studies = _this.data.Values;
            
            $.each(studies, function (index, value) {
                value.TrendClass = _this.TrendCssClasess[value.Trend];
                value.ObOsClass = _this.ObOsCssClasess[value.ObOs];
                value.VolatilityClass = _this.VolatilityCssClasess[value.Volatility];
                value.TypeDisplay = _this.loaderBase.config.Translations[value.Type];
                value.TrendDisplay = _this.loaderBase.config.Translations[value.Trend];
                value.ObOsDisplay = _this.loaderBase.config.Translations[value.ObOs];
                value.VolatilityDisplay = _this.loaderBase.config.Translations[value.Volatility];
            });

            var jsonData = {
                Studies: studies,
                Translations: _this.loaderBase.config.Translations,
                PairName: _this.Pair,
                Seo: _this.Seo
            };

            var rendered = FXStreetWidgets.Util.renderByHtmlTemplate(_this.loaderBase.config.Mustaches[_this.MustacheKey], jsonData);
            _this.Container.html(rendered);

            _this.manageRenderedHtml();
        };

        _this.manageRenderedHtml = function () {
            _this.setToolTip();
        };

        _this.setToolTip = function () {
            _this.Container.find('[data-toggle="tooltip"]').tooltip();
        };

        return _this;
    };
}(FXStreetWidgets.$));