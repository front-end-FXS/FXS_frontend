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