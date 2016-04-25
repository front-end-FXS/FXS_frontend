(function () {
    FXStreetWidgets.Widget.TechnicalsMini = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.TechnicalsBase(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        parent.MustacheKey = 'technicalsmini';
        
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