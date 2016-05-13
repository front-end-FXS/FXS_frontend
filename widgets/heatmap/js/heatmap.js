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
        _this.setDatesToJson = FXStreetWidgets.Widget.Base.prototype.setDatesToJson;
        _this.renderHtml = FXStreetWidgets.Widget.Base.prototype.renderHtml;
        _this.log = FXStreetWidgets.Widget.Base.prototype.log;

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
                _this.log("start renderHtml for: " + _this.loaderBase.config.WidgetName);
                _this.renderHtml();
            } else {
                _this.interval = setInterval(function () {
                    if (_this.loaderBase.isReady()) {
                        clearInterval(_this.interval);
                        _this.log("start renderHtml for: " + _this.loaderBase.config.WidgetName);
                        _this.renderHtml();
                    }
                }, _this.intervalTimeToWaitForReady);
            }
        });
    };
    FXStreetWidgets.Widget.Base.prototype.setDatesToJson = function (json, dateResponse) {
        var date = FXStreetWidgets.Util.formatDateResponse(dateResponse);
        json.LastUpdatedDate = dateResponse.Value;
        json.LastUpdatedHour = date;
        return json;
    };
    FXStreetWidgets.Widget.Base.prototype.renderHtml = function () { };
    FXStreetWidgets.Widget.Base.prototype.log = function(msg) {
        FXStreetWidgets.Util.log(msg);
    };
}());
///#source 1 1 /widgets/core/js/app/loader-base.js
(function ($) {
    FXStreetWidgets.Widget.LoaderBase = function (options) {
        var _this = {};

        _this.options = options;
        _this.config = FXStreetWidgets.Widget.LoaderBase.prototype.config;
        _this.isReady = FXStreetWidgets.Widget.LoaderBase.prototype.isReady;
        _this.isReadyCustomCheck = FXStreetWidgets.Widget.LoaderBase.prototype.isReadyCustomCheck;
        _this.initConfiguration = FXStreetWidgets.Widget.LoaderBase.prototype.initConfiguration;
        _this.getContainer = FXStreetWidgets.Widget.LoaderBase.prototype.getContainer;
        _this.getHost = FXStreetWidgets.Widget.LoaderBase.prototype.getHost;
        _this.getVersion = FXStreetWidgets.Widget.LoaderBase.prototype.getVersion;
        _this.getCss = FXStreetWidgets.Widget.LoaderBase.prototype.getCss;
        _this.getCustomJs = FXStreetWidgets.Widget.LoaderBase.prototype.getCustomJs;
        _this.getEndPoint = FXStreetWidgets.Widget.LoaderBase.prototype.getEndPoint;
        _this.getEndPointTranslation = FXStreetWidgets.Widget.LoaderBase.prototype.getEndPointTranslation;
        _this.initWidgets = FXStreetWidgets.Widget.LoaderBase.prototype.initWidgets;
        _this.log = FXStreetWidgets.Widget.LoaderBase.prototype.log;

        _this.mustachesCount = 0;
        _this.mustachesLoadedCount = 0;
        _this.customJsCount = 0;
        _this.customJsLoadedCount = 0;
        _this.translationsLoaded = false;
        _this.cssLoaded = false;
        _this.haveCustomJs = false;

        _this.init = function () {
            if (!FXStreetWidgets.Util.isValid(_this.options)
                || !FXStreetWidgets.Util.isValid(_this.options.WidgetName)
                || !_this.options.WidgetName.trim()) {
                _this.log("unable to load fxswidget options bad configure.");
                return;
            }

            FXStreetWidgets.Initialization.registerLoader(_this.options.WidgetName, _this);

            _this.initConfiguration();
            _this.loadUtils();

            var widgets = $("div[fxs_widget][fxs_name='" + _this.options.WidgetName + "']");
            _this.initWidgets(widgets);
        };

        _this.loadDeferred = function (container) {
            _this.log("loading deferred " + _this.options.WidgetName);
            var widgets = container.find("div[fxs_widget][fxs_name='" + _this.options.WidgetName + "']");
            _this.initWidgets(widgets);
        };

        _this.loadUtils = function () {
            FXStreetWidgets.Util.ajaxJsonGetter(_this.config.EndPointTranslation).done(function (data) {
                _this.translationsLoaded = true;
                _this.config.Translations = data.Values;
            });

            var cssUrl = FXStreetWidgets.Configuration.getCssUrl(_this.config.Css + ".min.css", _this.config.Css);

            FXStreetWidgets.ResourceManagerObj.load(_this.config.Css, FXStreetWidgets.ResourceType.Css, cssUrl, function () {
                _this.cssLoaded = true;
            });

            $.each(_this.config.CustomJs, function (index, name) {
                _this.customJsCount++;
                var url = FXStreetWidgets.Configuration.getCoreJsUrl(name);

                FXStreetWidgets.ResourceManagerObj.load(url, FXStreetWidgets.ResourceType.Js, url, function () {
                    _this.customJsLoadedCount++;
                });
            });

            $.each(_this.config.Mustaches, function (key, value) {
                _this.mustachesCount++;
                var name = key + ".html";
                var url = FXStreetWidgets.Configuration.getMustacheUrl(name, _this.options.WidgetName);

                FXStreetWidgets.ResourceManagerObj.load(name, FXStreetWidgets.ResourceType.Mustache, url, function (res) {
                    _this.config.Mustaches[key] = res.Value;
                    _this.mustachesLoadedCount++;
                });
            });
        };

        return _this;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.config = {};
    FXStreetWidgets.Widget.LoaderBase.prototype.initWidgets = function (widgets) { };
    FXStreetWidgets.Widget.LoaderBase.prototype.initConfiguration = function () {
        this.log("init configuration for: " + this.options.WidgetName);

        var container = this.getContainer();
        var host = this.getHost(container);
        var version = this.getVersion(container);
        var css = this.getCss();
        var customJs = this.getCustomJs();

        this.config = {
            WidgetName: this.options.WidgetName,
            Culture: FXStreetWidgets.Configuration.getCulture(),
            EndPoint: this.getEndPoint(host, version),
            EndPointTranslation: this.getEndPointTranslation(host, version),
            DefaultHost: this.options.DefaultHost,
            Css: css,
            CustomJs: customJs,
            Mustaches: this.options.Mustaches,
            Translations: {}
        };
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.getContainer = function () {
        var container = $("div[fxs_widget][fxs_name='" + this.options.WidgetName + "']").first();
        return container;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.getHost = function (container) {
        container = container || this.getContainer();
        var host = container.attr("fxs_host");
        host = FXStreetWidgets.Util.isUndefined(host) ? this.options.DefaultHost : host;
        return host;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.getVersion = function (container) {
        container = container || this.getContainer();
        var version = container.attr("fxs_version") || this.options.DefaultVersion;
        version = FXStreetWidgets.Util.isUndefined(version) ? "" : version + "/";
        return version;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.getCss = function () {
        var name = FXStreetWidgets.Util.isValid(this.options.Css) ? this.options.Css : this.options.WidgetName;
        return name;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.getCustomJs = function () {
        var customJs = [];

        if (FXStreetWidgets.Util.arrayIsValid(this.options.CustomJs)){
            this.haveCustomJs = true;
            customJs = this.options.CustomJs;
        }

        return customJs;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.getEndPoint = function (host, version) {
        var endPoint = host + version + FXStreetWidgets.Configuration.getCulture() + "/" + this.options.EndPoint;
        return endPoint;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.getEndPointTranslation = function (host, version) {
        var endPoint = host + version + FXStreetWidgets.Configuration.getCulture() + "/" + this.options.EndPointTranslation;
        return endPoint;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.isReady = function () {
        var result = this.translationsLoaded === true
            && this.cssLoaded === true
            && ((this.haveCustomJs === false) || (this.haveCustomJs === true && this.customJsLoadedCount >= this.customJsCount))
            && this.mustachesLoadedCount === this.mustachesCount;

        result = result && this.isReadyCustomCheck();

        if (result === true) {
            this.log("loader ready for: " + this.options.WidgetName);
        }

        return result;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.isReadyCustomCheck = function () {
        return true;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.chartLibrariesAreLoaded = function () {
        var result = typeof (d3) !== "undefined" && typeof (c3) !== "undefined";
        return result;
    };
    FXStreetWidgets.Widget.LoaderBase.prototype.log = function (msg) {
        FXStreetWidgets.Util.log(msg);
    };
}(FXStreetWidgets.$));
///#source 1 1 /widgets/heatmap/js/base.js
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
///#source 1 1 /widgets/heatmap/js/widget.js
(function ($) {
    FXStreetWidgets.Widget.HeatMap = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.HeatMapBase(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.MustacheKey = _this.loaderBase.config.WidgetName;

        return _this;
    };
}(FXStreetWidgets.$));
///#source 1 1 /widgets/heatmap/js/loader.js
(function ($) {
    FXStreetWidgets.Widget.LoaderHeatMap = function () {
        var options = {
            WidgetName: "heatmap",
            EndPoint: "heatmap/study/",
            EndPointTranslation: "heatmap/localization/",
            DefaultHost: "http://markettools.api.fxstreet.com/",
            Mustaches:
                {
                    "heatmap": ""
                },
            Css: "heatmap",
            DefaultVersion: "v1"
        };

        var parent = FXStreetWidgets.Widget.LoaderBase(options),
             _this = FXStreetWidgets.Util.extendObject(parent);

        parent.initWidgets = function (widgets) {
            $.each(widgets, function (i, heatmap) {
                var jHeatMap = $(heatmap);

                var initJson = {
                    Container: jHeatMap,
                    AssetIds: jHeatMap.attr("fxs_assets"),
                    FormatUrl: jHeatMap.attr("fxs_format_url")
                };
                
                if (!FXStreetWidgets.Util.isUndefined(initJson.AssetIds)) {
                    var validAssets = true;
                    initJson.AssetIds.split(',').forEach(function (asset) {
                        if (!asset.startsWith('fxs-')) {
                            console.log("fxserror unable to create " + _this.config.WidgetName + ", asset not valid: " + asset);
                            validAssets = false;
                        }
                    });
                    if (validAssets) {
                        var widget = new FXStreetWidgets.Widget.HeatMap(_this);
                        widget.init(initJson);
                    }
                } else {
                    console.log("fxserror unable to create " + _this.config.WidgetName + ", assets value cannot be empty");
                }
            });
        };
        return _this;
    };
    (function () {
        var loader = new FXStreetWidgets.Widget.LoaderHeatMap();
        loader.init();
    })();
}(FXStreetWidgets.$));
