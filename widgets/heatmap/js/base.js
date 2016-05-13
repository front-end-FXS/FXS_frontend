(function ($) {
    FXStreetWidgets.Widget.HeatMapBase = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.Base(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        _this.Container = null;
        _this.WidgetId = null;
        _this.AssetIds = "";
        _this.Seo = false;
        _this.MustacheKey = "";
        _this.FormatUrl = "";

        _this.PairKey = "{{asset}}";

        _this.TrendCssClasess = {
            StronglyBearish: "fxs_heatmap_bearish",
            Bearish: "fxs_heatmap_slightlybearish",
            Neutral: "fxs_heatmap_neutral",
            Bullish: "fxs_heatmap_bullish",
            SlightlyBullish: "fxs_heatmap_slightlybullish"
        };

        _this.PerformanceStatusCssClasess = {
            Positive: "price_up",
            Negative: "price_down",
            Neutral: "price_neutral"
        };

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.loadDataFromUrl(_this.loaderBase.config.EndPoint + "/" + _this.AssetIds);
        };

        _this.setVars = function () {
            _this.WidgetId = 'hm_' + FXStreetWidgets.Util.guid();
        };

        _this.getPerformanceStatus = function (value) {
            if (value > 0) {
                return _this.PerformanceStatusCssClasess.Positive;
            }
            else if (value < 0) {
                return _this.PerformanceStatusCssClasess.Negative;
            } else {
                return _this.PerformanceStatusCssClasess.Neutral;
            }
        }

        _this.renderHtml = function () {
            if (_this.data.Values === null || _this.data.Values.length === 0) {
                return;
            }

            var jsonData = {
                Studies: _this.getStudies(_this.data.Values),
                Translations: _this.loaderBase.config.Translations,
                WidgetId: _this.WidgetId
            };

            jsonData = _this.setDatesToJson(jsonData, _this.data.Values[0].Date);

            _this.setUrls(jsonData);

            var rendered = FXStreetWidgets.Util.renderByHtmlTemplate(_this.loaderBase.config.Mustaches[_this.MustacheKey], jsonData);
            _this.Container.html(rendered);
            _this.manageRenderedHtml();
        };

        _this.setUrls = function (studies) {
            $.each(studies.Studies, function (i, study) {
                $.each(study.Items, function (j, asset) {
                    if (_this.FormatUrl) {
                        if (_this.FormatUrl.indexOf(_this.PairKey) > -1) {
                            asset.Url = _this.FormatUrl.replace(_this.PairKey, asset.Asset.Url);
                        } else {
                            asset.Url = _this.FormatUrl + asset.Asset.Url;
                        }
                        asset.Url = asset.Url.toLowerCase();
                    }
                });
            });
        };

        _this.getStudies = function (source) {
            $.each(source, function (index, value) {
                value.TrendCssClasess = _this.TrendCssClasess[value.Trend];
                value.PerformanceStatusCssClasess = _this.getPerformanceStatus(value.PerformancePercentage);
                value.TypeDisplay = _this.loaderBase.config.Translations[value.Type];
            });

            var result = _this.getStudyItems(source);
            return result;
        };

        _this.createStudyItem = function (source) {
            var result = {
                PeriodTypeCode: source,
                PeriodTypeValue: _this.loaderBase.config.Translations[source],
                Items: []
            };
            return result;
        };

        _this.getStudyItems = function (source) {
            var result = [];

            $.each(source, function (index, value) {
                var f = $.grep(result, function (e) {
                    return e.PeriodTypeCode === value.Type;
                });
                if (f.length === 0) {
                    result.push(_this.createStudyItem(value.Type));
                }
            });

            $.each(result, function (i, val1) {
                $.each(source, function (j, val2) {
                    if (val1.PeriodTypeCode === val2.Type) {
                        val1.Items.push(val2);
                    }
                });
            });

            return result;
        };

        _this.manageRenderedHtml = function () {
            _this.setFirstTabActive();
            _this.setToolTip();
        };

        _this.setToolTip = function () {
            _this.Container.find('[data-toggle="tooltip"]').tooltip();
        };

        _this.setFirstTabActive = function () {
            _this.Container.find('.fxs_tabs_nav li').first().addClass('active');
            _this.Container.find('div[role="tabpanel"]').first().addClass("fade in active");
        };
        return _this;
    };
}(FXStreetWidgets.$));