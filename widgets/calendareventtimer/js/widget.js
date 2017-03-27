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
        _this.DateFormat="";

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
            _this.DateFormat=data.DateFormat;
            formatDisplayValues();
        };

        var formatDisplayValues = function () {

            if (_this.Event) {
               var formattedDate= FXStreetWidgets.Util.formatDateUtcOffset(_this.Event.EventDate.DateUTC, _this.TimeZone.HourOffset);
               _this.Event.EventDateDisplayDate = _this.DateFormat.replace('{0}', formattedDate);
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
            var formattedHours= FXStreetWidgets.Util.formatDateUtcOffset(otherEvent.EventDate.DateUTC, _this.TimeZone.HourOffset, "HH:mm");

            otherEvent.EventDateHourDisplay = _this.DateFormat.replace('{0}', formattedHours);
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
                    + createSpan('%M', minDisplay);

            var finishCountdownDisplay =
                    createSpan('00 :', daysDisplay)
                    + createSpan('00 :', hoursDisplay)
                    + createSpan('00', minDisplay);

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