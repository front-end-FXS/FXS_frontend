///#source 1 1 /widgets/core/js/app/widget-base.js
(function () {
    FXStreetWidgets.Widget.Base = function (loaderBase) {
        var _this = {};

        _this.loaderBase = loaderBase;
        _this.data = FXStreetWidgets.Widget.Base.prototype.data;
        _this.interval = FXStreetWidgets.Widget.Base.prototype.interval;
        _this.init = FXStreetWidgets.Widget.Base.prototype.init;
        _this.setSettingsByObject = FXStreetWidgets.Widget.Base.prototype.setSettingsByObject;
        _this.addEvents = FXStreetWidgets.Widget.Base.prototype.addEvents;
        _this.setVars = FXStreetWidgets.Widget.Base.prototype.setVars;
        _this.loadData = FXStreetWidgets.Widget.Base.prototype.loadData;
        _this.loadDataFromUrl = FXStreetWidgets.Widget.Base.prototype.loadDataFromUrl;
        _this.renderHtml = FXStreetWidgets.Widget.Base.prototype.renderHtml;

        return _this;
    };
    FXStreetWidgets.Widget.Base.prototype.loaderBase = null;
    FXStreetWidgets.Widget.Base.prototype.data = null;
    FXStreetWidgets.Widget.Base.prototype.interval = null;
    FXStreetWidgets.Widget.Base.prototype.init = function (json) {
        this.setSettingsByObject(json);
    };
    FXStreetWidgets.Widget.Base.prototype.setSettingsByObject = function (json) {
        for (var propName in json) {
            if (json.hasOwnProperty(propName)) {
                if (this[propName] !== undefined) {
                    this[propName] = json[propName];
                }
            }
        }
    };
    FXStreetWidgets.Widget.Base.prototype.addEvents = function () { };
    FXStreetWidgets.Widget.Base.prototype.setVars = function () { };
    FXStreetWidgets.Widget.Base.prototype.loadData = function (request) {
        this.loadDataFromUrl(this.loaderBase.config.EndPoint, request);
    };
    FXStreetWidgets.Widget.Base.prototype.loadDataFromUrl = function (url, request) {
        var _this = this;
        FXStreetWidgets.Util.ajaxJsonGetter(url, request).done(function (data) {
            _this.data = data;
            if (_this.loaderBase.isReady()) {
                _this.renderHtml();
            } else {
                _this.interval = setInterval(function () {
                    if (_this.loaderBase.isReady()) {
                        clearInterval(_this.interval);
                        _this.renderHtml();
                    }
                }, _this.intervalTimeToWaitForReady);
            }
        });
    };
    FXStreetWidgets.Widget.Base.prototype.renderHtml = function () { };
}());
///#source 1 1 /widgets/core/js/app/loader-base.js
(function ($) {
    FXStreetWidgets.Widget.LoaderBase = function (options) {
        var _this = {};

        _this.options = options;
        _this.config = FXStreetWidgets.Widget.LoaderBase.prototype.config;
        _this.isReady = FXStreetWidgets.Widget.LoaderBase.prototype.isReady;
        _this.initWidgets = FXStreetWidgets.Widget.LoaderBase.prototype.initWidgets;

        _this.mustachesCount = 0;
        _this.mustachesLoadedCount = 0;
        _this.translationsLoaded = false;
        _this.cssLoaded = false;

        _this.init = function () {
            if (!FXStreetWidgets.Util.isValid(_this.options)
                || !FXStreetWidgets.Util.isValid(_this.options.WidgetName)
                || !_this.options.WidgetName.trim()) {
                console.log("unable to load fxswidget options bad configure.");
                return;
            }

            _this.initConfiguration();
            _this.loadUtils();
            _this.initWidgets();
        };

        _this.initConfiguration = function () {
            var div = $("div[fxs_widget][fxs_name='" + _this.options.WidgetName + "']").first();

            var host = div.attr("fxs_host");
            host = FXStreetWidgets.Util.isUndefined(host) ? _this.options.DefaultHost : host;

            var version = div.attr("fxs_version") || _this.options.DefaultVersion;
            version = FXStreetWidgets.Util.isUndefined(version) ? "" : version + "/";

            var css = FXStreetWidgets.Util.isValid(_this.options.Css)
                ? FXStreetWidgets.Configuration.getCssUrl(_this.options.Css + ".min.css", _this.options.Css)
                : FXStreetWidgets.Configuration.getCssUrl(_this.options.WidgetName + ".min.css", _this.options.WidgetName);

            _this.config = {
                WidgetName: _this.options.WidgetName,
                Culture: FXStreetWidgets.Configuration.getCulture(),
                EndPoint: host + version + FXStreetWidgets.Configuration.getCulture() + "/" + _this.options.EndPoint,
                EndPointTranslation: host + version + FXStreetWidgets.Configuration.getCulture() + "/" + _this.options.EndPointTranslation,
                DefaultHost: _this.options.DefaultHost,
                Css: css,
                Mustaches: _this.options.Mustaches,
                Translations: {}
            };
        };

        _this.loadUtils = function () {
            FXStreetWidgets.Util.ajaxJsonGetter(_this.config.EndPointTranslation).done(function (data) {
                _this.translationsLoaded = true;
                _this.config.Translations = data.Values;
            });

            FXStreetWidgets.Util.loadCssAsync(_this.config.Css, function () {
                _this.cssLoaded = true;
            });

            $.each(_this.config.Mustaches, function (key, value) {
                _this.mustachesCount++;
                var mustacheUrl = FXStreetWidgets.Configuration.getMustacheUrl(key + ".html", _this.options.WidgetName);

                FXStreetWidgets.Util.loadHtmlTemplate(mustacheUrl).done(function (mustacheValue) {
                    _this.config.Mustaches[key] = mustacheValue;
                    _this.mustachesLoadedCount++;
                });
            });
        };

        return _this;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.config = {};
    FXStreetWidgets.Widget.LoaderBase.prototype.initWidgets = function () { };
    FXStreetWidgets.Widget.LoaderBase.prototype.isReady = function () {
        return this.translationsLoaded === true
            && this.cssLoaded === true
            && this.mustachesLoadedCount === this.mustachesCount;
    };
}(FXStreetWidgets.$));
///#source 1 1 /widgets/sentiment/js/base.js
(function ($) {
    FXStreetWidgets.Widget.SentimentBase = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.Base(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        _this.Container = null;
        _this.AssetId = "";
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
            _this.loadDataFromUrl(_this.loaderBase.config.EndPoint + "/" + _this.AssetId);
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
///#source 1 1 /widgets/sentiment/js/widget.js
(function ($) {
    FXStreetWidgets.Widget.Sentiment = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.SentimentBase(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.MustacheKey = _this.loaderBase.config.WidgetName;
        
        return _this;
    };
}(FXStreetWidgets.$));
///#source 1 1 /widgets/sentiment/js/widgetmini.js
(function () {
    FXStreetWidgets.Widget.SentimentMini = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.SentimentBase(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.MustacheKey = 'sentimentmini';
        
        parent.manageRenderedHtml = function () {
            _this.setFirstTabActive();
            parent.setToolTip();
        };

        _this.setFirstTabActive = function () {
            _this.Container.find('.fxs_tabs_nav li').first().addClass('active');
            _this.Container.find('div[role="tabpanel"]').first().addClass("fade in active");
        };

        return _this;
    };
}());
///#source 1 1 /widgets/sentiment/js/loader.js
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
