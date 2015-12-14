(function () {
    FXStreetWidgets.Widget.Technicals = function (loaderBase) {
        var parent = FXStreetWidgets.Widget.Base(loaderBase),
            _this = FXStreetWidgets.Util.extendObject(parent);

        _this.Container = null;
        _this.Pair = "";
        _this.WidgetId = null;
        _this.Seo = false;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.loadData({ pairs: _this.Pair });
        };

        _this.renderHtml = function () {
            var studyData = _this.data.Values.length > 0 ? _this.data.Values[0] : {};
            var jsonData = {
                Study: studyData,
                Translations: _this.loaderBase.config.Translations,
                PairName: _this.Pair,
                Seo: _this.Seo
            };

            var rendered = FXStreetWidgets.Util.renderByHtmlTemplate(_this.loaderBase.config.Mustaches[_this.loaderBase.config.WidgetName], jsonData);
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
}());