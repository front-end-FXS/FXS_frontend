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