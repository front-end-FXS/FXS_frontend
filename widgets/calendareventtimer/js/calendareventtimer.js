(function () {
    FXStreetWidgets.Widget.Base = function (loaderBase) {
        var _this = {};

        _this.Container = FXStreetWidgets.Widget.Base.prototype.Container;
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
        _this.jsonDataIsValid = FXStreetWidgets.Widget.Base.prototype.jsonDataIsValid;
        _this.handleJsonInvalidData = FXStreetWidgets.Widget.Base.prototype.handleJsonInvalidData;

        return _this;
    };
    FXStreetWidgets.Widget.Base.prototype.Container = null;
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
        FXStreetWidgets.Util.ajaxJsonGetter(url, request)
            .done(function (data) {
                if (!_this.jsonDataIsValid(data)) {
                    _this.handleJsonInvalidData();
                    return;
                }

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
            })
            .error(function () {
                _this.handleJsonInvalidData();
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
    FXStreetWidgets.Widget.Base.prototype.jsonDataIsValid = function (data) {
        var result = FXStreetWidgets.Util.isValid(data)
                    && FXStreetWidgets.Util.arrayIsValid(data.Values)
                    && FXStreetWidgets.Util.isValid(data.Values[0]);
        return result;
    };
    FXStreetWidgets.Widget.Base.prototype.handleJsonInvalidData = function () {
        var _this = this;
        var noDataMessage = _this.loaderBase.config.Translations['NoDataAvailable'];
        if (!FXStreetWidgets.Util.isValid(noDataMessage)) {
            noDataMessage = 'No data available';
        }
        _this.Container.html(noDataMessage);
    };
}());
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
        _this.getCustomJs = FXStreetWidgets.Widget.LoaderBase.prototype.getCustomJs;
        _this.getEndPoint = FXStreetWidgets.Widget.LoaderBase.prototype.getEndPoint;
        _this.getEndPointTranslation = FXStreetWidgets.Widget.LoaderBase.prototype.getEndPointTranslation;
        _this.initWidgets = FXStreetWidgets.Widget.LoaderBase.prototype.initWidgets;
        _this.log = FXStreetWidgets.Widget.LoaderBase.prototype.log;
        _this.chartLibrariesAreLoaded = FXStreetWidgets.Widget.LoaderBase.prototype.chartLibrariesAreLoaded;

        _this.mustachesCount = 0;
        _this.mustachesLoadedCount = 0;
        _this.customJsCount = 0;
        _this.customJsLoadedCount = 0;
        _this.translationsLoaded = false;
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
            FXStreetWidgets.Util.async(function() {
                _this.initWidgets(widgets);
            });
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
        var customJs = this.getCustomJs();

        this.config = {
            WidgetName: this.options.WidgetName,
            Culture: FXStreetWidgets.Configuration.getCulture(),
            EndPoint: this.getEndPoint(host, version),
            EndPointTranslation: this.getEndPointTranslation(host, version),
            DefaultHost: this.options.DefaultHost,
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
(function ($) {
    FXStreetWidgets.Widget.CalendarEventTimer = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.Base(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        _this.EventId = "";
        _this.WidgetId = "";
        _this.OtherEventsIds = [];
        _this.HoursToShowNextevent = 24;
        _this.TimeZoneName = "";   
        _this.Seo = false;
        _this.Event = {};
        _this.OtherEvents=[];
        _this.TimeZone={};

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            var url = _this.loaderBase.config.EndPoint +"eventtimer?hoursToShowActual={hours}&timezone={timeZone}&mainEvent={EventId}&otherEvents={otherEventsIds}"; 
            url = replaceUrValues(url);
            _this.loadDataFromUrl(url);
        };

        _this.jsonDataIsValid = function (data) {
            var result = FXStreetWidgets.Util.isValid(data);
            return result;
        };

        _this.renderHtml = function () {
            mapEventResponse(_this.data);
            var jsonData = {
                Event: _this.Event,
                OtherEvents:_this.OtherEvents,
               // ModerateUrl: _this.ModerateUrl,
                Translations: _this.loaderBase.config.Translations,
                Seo: _this.Seo,
                CultureName: FXStreetWidgets.Configuration.getCulture()
            };
            var rendered = FXStreetWidgets.Util.renderByHtmlTemplate(_this.loaderBase.config.Mustaches[_this.loaderBase.config.WidgetName], jsonData);
            _this.Container.html(rendered);
            manageRenderedHtml();
        };

        var replaceUrValues = function (url) {
            var result = url.replace("{hours}", _this.HoursToShowNextevent)
                .replace("{timeZone}", _this.TimeZoneName)
                .replace("{EventId}", _this.EventId)
                .replace("{otherEventsIds}", _this.OtherEventsIds);
            return result;
        };

        var mapEventResponse = function (data) {
            _this.Event = data.Event;
            _this.OtherEvents = data.OtherEvents;
            formatDisplayValues();
        };

        var formatDisplayValues = function () {

            if (_this.Event) {
                _this.Event.EventDateDisplayDate = FXStreetWidgets.Util.formatDateUtcOffset(_this.Event.EventDate.DateUTC, _this.TimeZone.HourOffset);
                setNullValues(_this.Event);
            }

            $.each(_this.OtherEvents, function (index, otherEvent) {
                formatDates(otherEvent);
                setNullValues(otherEvent);
            });
        };

        var setNullValues = function (event) {
            var eventDate = event.EventDate;

            eventDate.ActualDisplay=   (eventDate.Actual) ? eventDate.Actual +event.Symbol  : "n/a";
            eventDate.ConsensusDisplay = (eventDate.Consensus) ? eventDate.Consensus + event.Symbol : "n/a";
            eventDate.PreviousDisplay = (eventDate.Previous) ? eventDate.Previous + event.Symbol : "n/a";
        }

        var formatDates = function (otherEvent) {
            otherEvent.EventDateDayDisplay = FXStreetWidgets.Util.formatDateUtcOffset(otherEvent.EventDate.DateUTC, _this.TimeZone.HourOffset, "MMM D");
            otherEvent.EventDateHourDisplay = FXStreetWidgets.Util.formatDateUtcOffset(otherEvent.EventDate.DateUTC, _this.TimeZone.HourOffset, "HH:mm");
        };


        var manageRenderedHtml = function () {
            if (_this.Event.ShowNextEvent) {
                handleCountDown();
            }                  
        };      

         var handleCountDown = function () {
            if (!FXStreetWidgets.Util.isValid(_this.data) || !FXStreetWidgets.Util.isValid(_this.Event.EventDate.DateUTC)) {
                return;
            }

            var untilTime = new Date(_this.Event.EventDate.DateUTC);
                        
            var daysDisplay = _this.loaderBase.config.Translations["Days"].toLowerCase();
            var hoursDisplay = _this.loaderBase.config.Translations["Hours"].toLowerCase();
            var minDisplay = _this.loaderBase.config.Translations["Min"].toLowerCase();
            var secDisplay = _this.loaderBase.config.Translations["Sec"].toLowerCase();

            var updateCountdownDisplay = 
                    createSpan('%D :', daysDisplay)
                    + createSpan('%H :', hoursDisplay)
                    + createSpan('%M :', minDisplay)
                    + createSpan('%S', secDisplay);

            var finishCountdownDisplay = 
                    createSpan('00 :', daysDisplay)
                    + createSpan('00 :', hoursDisplay)
                    + createSpan('00 :', minDisplay)
                    + createSpan('00', secDisplay);

             _this.Container.find('#clock_' + _this.Event.EventId)
                .countdown(untilTime).on('update.countdown', function (event) {
                    var $this = $(this).html(event.strftime(updateCountdownDisplay));
                })
                .on('finish.countdown', function (event) {
                    $(this).html(finishCountdownDisplay);
                     showLastEventDate(_this.Event); 
                });
         };

         var setShowNextEvent = function (event) {
             if (event.EventDate.Actual) {
                 event.ShowNextEvent = false
             } 
         }

         var showLastEventDate = function (event) {
             setShowNextEvent(event);
             _this.renderHtml();
         };

        var createSpan = function (symbol, value) {
            return '<span><span class="fxs_widget_custom_data_lable">' + symbol + '</span>' + value + '</span>';
        };

        return _this;
    };
}(FXStreetWidgets.$));
(function ($) {
    FXStreetWidgets.Widget.LoaderCalendarEventTimer = function () {
        var options = {
            WidgetName: "calendareventtimer",
            EndPoint: "",
            EndPointTranslation: "eventtimer/localization",
            DefaultHost: "https://calendar.fxstreet.com/",
            Mustaches:
                {
                    "calendareventtimer": ""
                },
            CustomJs: ["jquery.countdown.min.js"]
        };

        var parent = FXStreetWidgets.Widget.LoaderBase(options),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.initWidgets = function (widgets) {
            $.each(widgets, function (i, calendareventtimer) {
                var jCalendarEventTimer = $(calendareventtimer);

                var initJson = {
                    Container: jCalendarEventTimer,
                    EventId: jCalendarEventTimer.attr("fxs_eventid"),
                    OtherEventsIds: jCalendarEventTimer.attr("fxs_other_events_ids"),
                    HoursToShowNextevent: jCalendarEventTimer.attr("fxs_hours_to_show_next_event"),
                    TimeZoneName: jCalendarEventTimer.attr("fxs_time_zone"),
                    WidgetId: FXStreetWidgets.Util.guid(),
                    Seo: FXStreetWidgets.Util.isUndefined(jCalendarEventTimer.attr("fxs_seo")) ? false : true
                };

                if (FXStreetWidgets.Util.isUndefined(initJson.EventId)) {
                    console.log("fxserror unable to create " + _this.config.WidgetName + ", event not valid: " + initJson.EventId);
                } else {
                    var widget = new FXStreetWidgets.Widget.CalendarEventTimer(_this);
                    widget.init(initJson);
                }
            });
        };
        return _this;
    };

    (function () {
        var loader = new FXStreetWidgets.Widget.LoaderCalendarEventTimer();
        loader.init();
    })();
}(FXStreetWidgets.$));