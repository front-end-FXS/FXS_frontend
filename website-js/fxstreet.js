(function () {
    window.FXStreet = {};
    var FXStreet = window.FXStreet;

    // A pointer to the active resource object instance
    FXStreet.Resource = {};

    // A static helper class
    FXStreet.Util = {};

    // A namespace for class definitions
    FXStreet.Class = {};

    FXStreet.ExternalLib = {};
    FXStreet.ExternalLib.Classie = null;
    FXStreet.ExternalLib.Mustache = null;
    FXStreet.ExternalLib.GoogleTag = null;

    /*
    A namespace for instances, 
    this is used for instances of objects that are auto generated from object tags. 
    */
    FXStreet.Instance = {};
    FXStreet.Instance.index = 0;
    FXStreet.Instance.getNextIndex = function () {
        FXStreet.Instance.index += 1;
        return FXStreet.Instance.index;
    };

    /******************************
    ---- BEGIN REGION RESOURCE ----
    ********************************/

    FXStreet.Resource.StaticContentScript = '';
    FXStreet.Resource.StaticContentCss = '';
    FXStreet.Resource.StaticContentFont = '';
    FXStreet.Resource.StaticContentHtmlTemplate = '';
    FXStreet.Resource.StaticContentQueryStringRefresh = '';
    FXStreet.Resource.FxsApiRoutes = {};
    FXStreet.Resource.IsDesignMode = false;
    FXStreet.Resource.IsPreviewMode = false;
    FXStreet.Resource.isReady = false;
    FXStreet.Resource.CultureName = '';
    FXStreet.Resource.InitialTitle = '';
    FXStreet.Resource.InitialUrl = '';
    FXStreet.Resource.PageTitle = '';
    FXStreet.Resource.PageUrl = '';

    /******************************
    ---- END REGION RESOURCE ----
    ********************************/

    /******************************
    ---- BEGIN REGION UTIL ----
    ********************************/

    //Douglas Crockford's inheritance method
    FXStreet.Util.extendObject = function (o) {
        var F = function () { };
        F.prototype = o;
        return new F();
    };

    FXStreet.Util.ready = function () {
        //Initialize objects
        FXStreet.Util.preReady();
        FXStreet.Util.initObjects("ready");
        FXStreet.Resource.isReady = true;
    };

    FXStreet.Util.load = function () {
        //Initialize objects
        FXStreet.Util.initObjects("load");
    };

    FXStreet.Util.preReady = function () {
        FXStreet.ExternalLib.Classie = classie;
        FXStreet.ExternalLib.Mustache = Mustache;
        FXStreet.ExternalLib.GoogleTag = googletag;

        var object = FXStreet.Util.createObject("ResponsiveDesign", {});
        FXStreet.Util.initObject(object);

        FXStreet.Util.registerDynamicObjs();

        FXStreet.Resource.InitialTitle = document.title;
        FXStreet.Resource.InitialUrl = window.location.pathname;
        if (FXStreet.Util.isTouchDevice()) {
            $('body').addClass('fxs_touch');
        }
    };

    /*
    Name: 
    Class Util
    Param:
    objNameBase: the prefix for the instance name
    objType: The type of object to create
    json: The object passed to the init method
    createEvent:       ready, If the object should be created on the ready event - (The Default)
    load, If the object creation can wait until the onLoad event
    Return: 
    None
    Functionality:
    Represents a Static Util object
    Notes:
    Provides common methods.
    Used for inheritance - for example
    var parent = new FXStreet.Class.Base();
    var theObject = FXStreet.Util.extendObject(parent);
    This class reads in the JSON object tags and instantiates them into running JavaScript
            
    Class Hierarchy:
    FXStreet -> Resource
    */

    FXStreet.Util.createObjectArray = [];
    FXStreet.Util.registerDynamicObjs = function () {
        var divs = $("div [fxs_objtype]");

        for (var i = 0; i < divs.length; i++) {
            var current = $(divs[i]);

            var createEvent = current.attr("fxs_createevent");
            var objType = current.attr("fxs_objtype");

            if (createEvent === undefined || objType === undefined) {
                console.log("unable to create fxsobj from: " + current.attr("id"));
                continue;
            }

            var json = {};

            try {
                json = FXStreet.Util.deserializeJsonFromAttr(current.attr("fxs_json"));
            } catch (e) {
                console.log("unable to create fxsobj from: " + current.attr("id"));
                continue;
            }

            FXStreet.Util.createObject(objType, json, createEvent);
        }
    };
    FXStreet.Util.createObject = function (objType, json, createEvent) {
        createEvent = createEvent || "ready";
        var createObject = {
            "objType": objType,
            "json": json,
            "createEvent": createEvent,
            "created": false
        };
        if (FXStreet.Resource.isReady && FXStreet.Util.isBackendDesignMode()) {
            FXStreet.Util.initObject(createObject);
        }
        else {
            FXStreet.Util.createObjectArray.push(createObject);
        }
        return createObject;
    };

    FXStreet.Util.initObjects = function (createEvent) {
        createEvent = createEvent || "ready";
        var i = 0,
            createObjectArray = FXStreet.Util.createObjectArray,
            createObject = null;

        for (i = 0; i < createObjectArray.length; i += 1) {
            createObject = createObjectArray[i];
            if (!createObject.created && (createObject.createEvent === createEvent || createEvent === 'all')) {
                FXStreet.Util.initObject(createObject);
            }
        }
    };
    FXStreet.Util.initObject = function (createObject) {
        var objName = "",
            objectType = "",
            json = null;

        objName = createObject.objType + FXStreet.Instance.getNextIndex();
        objectType = createObject.objType;
        json = createObject.json || {};
        if (FXStreet.Class[objectType]) {
            FXStreet.Instance[objName] = new FXStreet.Class[objectType]();
            FXStreet.Instance[objName].init(json);
            createObject.created = true;
        }
    };

    FXStreet.Util.getObjectInstance = function (objectName) {
        var myObject = null;
        for (var ins in FXStreet.Instance) {
            if (ins.substring(0, objectName.length) === objectName) {
                myObject = FXStreet.Instance[ins];
                break;
            }
        }
        return myObject;
    };
    FXStreet.Util.getObjectInstanceAllStartWith = function (objectName) {
        var myObjects = new Array();
        for (var ins in FXStreet.Instance) {
            if (ins.substring(0, objectName.length) === objectName)
                myObjects.push(FXStreet.Instance[ins]);
        }
        return myObjects;
    };

    /* 
    Takes a JS Date as input and returns a string like "2010-05-31"
    */
    FXStreet.Util.dateToIsoString = function (date) {
        var year = date.getFullYear(),
            month = (date.getMonth() + 1).toString(),
            day = date.getDate().toString(),
            result = "";

        if (month.length === 1) {
            month = "0" + month;
        }
        if (day.length === 1) {
            day = "0" + day;
        }

        result = year + "-" + month + "-" + day;
        return result;
    };
    FXStreet.Util.dateToDateString = function (date, showYear) {
        var year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate().toString();

        if (showYear != undefined && showYear)
            return day + " " + FXStreet.Resource.Months[month] + " " + year;
        else
            return day + " " + FXStreet.Resource.Months[month];
    };
    FXStreet.Util.dateToTimeString = function (date) {
        var hour = date.getHours().toString(),
            minutes = date.getMinutes().toString();

        if (hour.length == 1)
            hour = "0" + hour;

        if (minutes.length == 1)
            minutes = "0" + minutes;

        return hour + ":" + minutes;
    };

    FXStreet.Util.getParamUriByName = function (name) {
        var nameTemp = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + nameTemp + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    FXStreet.Util.getUserAgent = function () {
        var result = "";
        if (navigator && navigator.userAgent && navigator.userAgent != null)
            result = navigator.userAgent;
        return result;
    };
    FXStreet.Util.isIPadDevice = function () {
        var userAgent = FXStreet.Util.getUserAgent();
        var result = userAgent.toLowerCase().match('/ipad/') ? true : false;
        return result;
    };
    FXStreet.Util.isIPhoneDevice = function () {
        var userAgent = FXStreet.Util.getUserAgent();
        var result = userAgent.toLowerCase().match('/iphone/') ? true : false;
        return result;
    };
    FXStreet.Util.isAndroidOS = function () {
        var userAgent = FXStreet.Util.getUserAgent();
        var result = userAgent.toLowerCase().match('/(Android)/') ? true : false;
        return result;
    };
    FXStreet.Util.isMobileDevice = function () {
        var userAgent = FXStreet.Util.getUserAgent();
        var result = userAgent.toLowerCase().match('/(Mobile)/') ? true : false;
        return result;
    };
    FXStreet.Util.isAndroidMobile = function () {
        var result = FXStreet.Util.isAndroidOS() && FXStreet.Util.isMobileDevice();
        return result;
    };
    FXStreet.Util.isAndroidTablet = function () {
        var result = FXStreet.Util.isAndroidOS() && !FXStreet.Util.isMobileDevice();
        return result;
    };
    FXStreet.Util.isTouchDevice = function () {
        return FXStreet.Util.isIPadDevice() ||
            FXStreet.Util.isIPhoneDevice() ||
            FXStreet.Util.isAndroidOS() ||
            FXStreet.Util.isMobileDevice() ||
            FXStreet.Util.isAndroidMobile() ||
            FXStreet.Util.isAndroidTablet();

    };

    //TODO MIRAR ESTO PARA VELOCIDAD:
    FXStreet.Util.htmlTemplateLoaded = {};
    FXStreet.Util.loadHtmlTemplate = function (name) {
        if (FXStreet.Util.htmlTemplateLoaded[name]) {
            return $.when().then(function () {
                return FXStreet.Util.htmlTemplateLoaded[name];
            });
        } else {
            return $.ajax({
                type: "GET",
                url: FXStreet.Resource.StaticContentHtmlTemplate + name + FXStreet.Resource.StaticContentQueryStringRefresh
            }).then(function (htmlTemplate) {
                FXStreet.Util.htmlTemplateLoaded[name] = htmlTemplate;
                return htmlTemplate;
            }, function () {
                alert("error to load:" + name);
            });
        }
    };
    FXStreet.Util.renderByHtmlTemplate = function (htmlTemplate, jsonData) {
        var result = FXStreet.ExternalLib.Mustache.render(htmlTemplate, jsonData);
        return result;
    };

    FXStreet.Util.isBackendDesignMode = function () {
        var result = FXStreet.Resource.IsDesignMode && !FXStreet.Resource.IsPreviewMode;
        return result;
    };

    FXStreet.Util.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };

    FXStreet.Util.serializeJsonForAttr = function (json) {
        return encodeURIComponent(JSON.stringify(json));
    };

    FXStreet.Util.deserializeJsonFromAttr = function (json) {
        return JSON.parse(decodeURIComponent(json));
    };

    FXStreet.Util.createUrl = function (urlBase, queryStringKeyValues) {
        var result = null;
        if (urlBase !== undefined && urlBase !== null) {
            result = urlBase + "?cultureName=" + FXStreet.Resource.CultureName;
            if (queryStringKeyValues !== undefined && queryStringKeyValues !== null) {
                for (var i = 0; i < queryStringKeyValues.length; i++) {
                    result += "&" + queryStringKeyValues[i].Key + "=" + queryStringKeyValues[i].Value;
                }
            }
        }
        return result;
    };
    FXStreet.Util.concatQueryToUrl = function (urlBase, queryStringKeyValues) {
        var result = null;
        if (urlBase !== undefined && urlBase !== null) {
            result = urlBase;
            if (queryStringKeyValues !== undefined && queryStringKeyValues !== null) {
                for (var i = 0; i < queryStringKeyValues.length; i++) {
                    result += "&" + queryStringKeyValues[i].Key + "=" + queryStringKeyValues[i].Value;
                }
            }
        }
        return result;
    };
    FXStreet.Util.updateUrl = function (url, title) {
        var baseUrl = [location.protocol, '//', location.host/*, location.pathname*/].join('');
        url = url.replace(/ /g, '-').toLowerCase();
        url = url.startsWith('/') && url.length > 0 ? url.substring(1) : url;
        window.history.pushState({}, "", baseUrl + '/' + url);
        document.title = title ? title : FXStreet.Resource.InitialTitle;
    };
    FXStreet.Util.updateHomeUrl = function() {
        FXStreet.Util.updateUrl(FXStreet.Resource.PageUrl);
    };
    FXStreet.Util.updateNewsUrl = function (url, title) {
        url = FXStreet.Resource.PageUrl + '/' + url;
        FXStreet.Util.updateUrl(url, title);
    };
    FXStreet.Util.getjQueryObjectById = function (id, check) {
        check = check || check === undefined;
        if (!id) {
            console.error('The id cannot be empty');
            return null;
        }

        var obj = $('#' + id);
        if (check && !obj.length) {
            console.error('There is not any object with the id ' + id);
        }

        return obj;
    };
    FXStreet.Util.getjQueryObjectBySelector = function (selector, check) {
        check = check || check === undefined;
        if (!selector) {
            console.error('The selector cannot be empty');
            return null;
        }

        var obj = $(selector);
        if (check && !obj.length) {
            console.error('There is not any object with the selector ' + selector);
        }

        return obj;
    };
    FXStreet.Util.check = function (jqueryObject) {
        if (!jqueryObject) {
            console.error('The object cannot be empty');
        }

        if (!jqueryObject.length) {
            console.error('The object cannot be null');
        }
        return jqueryObject;
    };
    FXStreet.Util.fillPageSpace = function () {
        var infiniteScrollPageObj = FXStreet.Util.getObjectInstance("InfiniteScrollPage");
        if (infiniteScrollPageObj.ScrollingElement.height() < infiniteScrollPageObj.ScrollingContent.height()) {
            //infiniteScrollPageObj.AvoidNextScroll = true;
            FXStreet.Util.tryRenderNextPageElement(FXStreet.Util.fillPageSpace);
        } else {
            infiniteScrollPageObj.MoveScroll(1);
        }
    };
    FXStreet.Util.tryRenderNextPageElement = function (doneDelegate) {
        var elements = FXStreet.Class.Sidebar.Util.RenderizableListItems.filter(function (item) {
            return item.RenderedItemInPage.Visible;
        });
        var position = 0;
        if (elements.length > 0) {
            elements.sort(function (a, b) {
                return a.RenderedItemInPage.PositionInRenderizableListItems < b.RenderedItemInPage.PositionInRenderizableListItems;
            });
            position = elements[0].RenderedItemInPage.PositionInRenderizableListItems + 1;
        }

        var element = FXStreet.Class.Sidebar.Util.RenderizableListItems[position];
        if (!element) {
            return;
        }

        var render = element.RenderedItemInPage.Render(true);
        if (doneDelegate) {
            (render || $.when()).done(doneDelegate);
        }
    };
    FXStreet.Util.getHomeCookie = function () {
        return $.cookie('newshome');
    };
    FXStreet.Util.setHomeCookie = function () {
        $.cookie('newshome', true, { expires: 1 / 24 }); // TODO: Set the correct time in days, now it is set at 1 hour
    };

    /******************************
        ---- END REGION UTIL ----
    ********************************/

    /******************************
    ---- BEGIN REGION CLASS ----
    ********************************/

    /*
    Name: 
    Base
    Param:
    None
    Return: 
    An instance of Base Class
    Functionality:
    This is the base class that most objects inherit from
    */
    FXStreet.Class.Base = function () {
        var thisBase = this;

        thisBase.init = FXStreet.Class.Base.prototype.init;
        thisBase.setSettingsByObject = FXStreet.Class.Base.prototype.setSettingsByObject;
        thisBase.addEvents = FXStreet.Class.Base.prototype.addEvents;
        thisBase.setVars = FXStreet.Class.Base.prototype.setVars;

        return thisBase;
    };
    FXStreet.Class.Base.prototype.init = function (json) {
        this.setSettingsByObject(json);
    };
    FXStreet.Class.Base.prototype.setSettingsByObject = function (json) {
        var propName = "";
        for (propName in json) {
            if (json.hasOwnProperty(propName)) {
                if (this[propName] !== undefined) {
                    this[propName] = json[propName];
                }
            }
        }
    };
    FXStreet.Class.Base.prototype.addEvents = function () { };
    FXStreet.Class.Base.prototype.setVars = function () { };

    FXStreet.Class.Patterns = {};
    FXStreet.Class.Patterns.Observer = {};
    FXStreet.Class.Patterns.Observer.List = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        _this.observerList = [];

        _this.add = function (obj) {
            return _this.observerList.push(obj);
        };

        _this.count = function () {
            return _this.observerList.length;
        };

        _this.get = function (index) {
            if (index > -1 && index < this.observerList.length) {
                return this.observerList[index];
            }
        };

        _this.indexOf = function (obj, startIndex) {
            var i = startIndex;
            while (i < _this.observerList.length) {
                if (_this.observerList[i] === obj) {
                    return i;
                }
                i++;
            }
            return -1;
        };

        _this.removeAt = function (index) {
            _this.observerList.splice(index, 1);
        };

        return _this;
    };
    FXStreet.Class.Patterns.Observer.Subject = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        _this.observers = new FXStreet.Class.Patterns.Observer.List();

        _this.addObserver = function (observer) {
            _this.observers.add(observer);
        };

        _this.removeObserver = function (observer) {
            _this.observers.removeAt(_this.observers.indexOf(observer, 0));
        };

        _this.notify = function (jsonParams) {
            var observerCount = _this.observers.count();
            for (var i = 0; i < observerCount; i++) {
                _this.observers.get(i).update(jsonParams);
            }
        };

        return _this;
    };
    FXStreet.Class.Patterns.Observer.Observer = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        _this.UpdateDelegate = null;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
        };

        _this.update = function (jsonParams) {
            if (_this.UpdateDelegate !== null)
                _this.UpdateDelegate(jsonParams);
        };

        return _this;
    };

    FXStreet.Class.ResponsiveDesign = function () {
        var parent = FXStreet.Class.Base(),
           _this = FXStreet.Util.extendObject(parent);

        _this.SmallerDesignTeamThanWidthLimit_ObserverSubject = null;
        _this.GreaterDesignTeamThanWidthLimit_ObserverSubject = null;
        _this.ResizeToDevice_ObserverSubjects = {};

        _this.DesignTeamWidthLimitPx = 1200;
        _this.MobileWidthLimitPx = 768;
        _this.TabletWidthLimitPx = 1024;

        _this.IsSmallerThanDesignTeamWidthLimit = false;
        _this.DeviceType = 'Desktop'; //Desktop, Mobile, Tablet

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
        };

        _this.setVars = function () {
            _this.SmallerDesignTeamThanWidthLimit_ObserverSubject = new FXStreet.Class.Patterns.Observer.Subject();
            _this.GreaterDesignTeamThanWidthLimit_ObserverSubject = new FXStreet.Class.Patterns.Observer.Subject();

            _this.ResizeToDevice_ObserverSubjects.Desktop = new FXStreet.Class.Patterns.Observer.Subject();
            _this.ResizeToDevice_ObserverSubjects.Mobile = new FXStreet.Class.Patterns.Observer.Subject();
            _this.ResizeToDevice_ObserverSubjects.Tablet = new FXStreet.Class.Patterns.Observer.Subject();

            _this.IsSmallerThanDesignTeamWidthLimit = _this.getWindowsWidth() <= _this.DesignTeamWidthLimitPx;
            _this.DeviceType = _this.getDeviceTypeByCurrentWindowsWidth();
        };

        _this.addEvents = function () {
            $(window).resize(function () { _this.windowsResize(); });
        };

        _this.windowsResize = function () {
            var windowWidth = _this.getWindowsWidth();

            if (windowWidth <= _this.DesignTeamWidthLimitPx && !_this.IsSmallerThanDesignTeamWidthLimit) {
                _this.IsSmallerThanDesignTeamWidthLimit = true;
                _this.SmallerDesignTeamThanWidthLimit_ObserverSubject.notify();
            }
            else if (windowWidth > _this.DesignTeamWidthLimitPx && _this.IsSmallerThanDesignTeamWidthLimit) {
                _this.IsSmallerThanDesignTeamWidthLimit = false;
                _this.GreaterDesignTeamThanWidthLimit_ObserverSubject.notify();
            }

            var currentDeviceType = _this.getDeviceTypeByCurrentWindowsWidth();
            if (currentDeviceType !== _this.DeviceType) {
                _this.DeviceType = currentDeviceType;
                var subject = _this.ResizeToDevice_ObserverSubjects[_this.DeviceType];
                if (subject) {
                    subject.notify();
                }
            }
        };

        _this.getWindowsWidth = function () {
            var result = $(window).width();
            return result;
        };
        _this.getDeviceTypeByCurrentWindowsWidth = function () {
            var result = 'Desktop'; // Desktop, Mobile, Tablet
            var windowsWidth = _this.getWindowsWidth();
            if (windowsWidth <= _this.MobileWidthLimitPx)
                result = 'Mobile';
            else if (windowsWidth <= _this.TabletWidthLimitPx)
                result = 'Tablet';
            return result;
        };

        _this.whenWindowsDesignTeamReduceLimit = function (functionDelegate) {
            if (functionDelegate !== undefined && functionDelegate !== null) {
                var json = { 'UpdateDelegate': functionDelegate };
                var observer = new FXStreet.Class.Patterns.Observer.Observer();
                observer.init(json);
                _this.SmallerDesignTeamThanWidthLimit_ObserverSubject.addObserver(observer);
            }
        };
        _this.whenWindowsDesignTeamIncreaseLimit = function (functionDelegate) {
            if (functionDelegate !== undefined && functionDelegate !== null) {
                var json = { 'UpdateDelegate': functionDelegate };
                var observer = new FXStreet.Class.Patterns.Observer.Observer();
                observer.init(json);
                _this.GreaterDesignTeamThanWidthLimit_ObserverSubject.addObserver(observer);
            }
        };
        _this.whenWindowsResizeToMobile = function (functionDelegate) {
            _this.whenWindowsResizeToDevice(functionDelegate, 'Mobile');
        };
        _this.whenWindowsResizeToTablet = function (functionDelegate) {
            _this.whenWindowsResizeToDevice(functionDelegate, 'Tablet');
        };
        _this.whenWindowsResizeToDesktop = function (functionDelegate) {
            _this.whenWindowsResizeToDevice(functionDelegate, 'Desktop');
        };
        _this.whenWindowsResizeToDevice = function (functionDelegate, deviceType) {
            if (functionDelegate !== undefined && functionDelegate !== null) {
                var json = { 'UpdateDelegate': functionDelegate };
                var observer = new FXStreet.Class.Patterns.Observer.Observer();
                observer.init(json);
                var subject = _this.ResizeToDevice_ObserverSubjects[deviceType];
                if (subject) {
                    subject.addObserver(observer);
                }
            }
        };

        return _this;
    };

    FXStreet.Class.InfiniteScroll = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        _this.IsLoading = false;

        // Json properties
        _this.ScrollingContent = null;
        _this.LoadFollowingDelegatePromise = null;
        _this.LoadPreviousDelegatePromise = null;
        _this.ScrollingElement = null;
        _this.LoadingMoreId = '';
        // End json properties

        _this.LastScroll = 0;
        _this.Initialized = false;
        _this.Scrolling = false;
        _this.NotMoreContent = false;
        _this.LoadingMore = null;
        _this.AvoidNextScroll = false;
        _this.endOfList = false;

        _this.actionBottomToPx = 100;

        _this.MoveUpDirection = false;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.InitPaginator();
            _this.SetupHeightStyle();
        };

        _this.setVars = function () {
            _this.LoadingMore = FXStreet.Util.getjQueryObjectById(_this.LoadingMoreId);
            _this.LoadingMore.show();
        };

        _this.SetupHeightStyle = function () {
            // if we have enough room, load the next batch
            //if (_this.ScrollingElement.height() > _this.ScrollingContent.height()) {
            //    var filler = document.createElement("div");
            //    filler.id = "filler";
            //    filler.style.height = (_this.ScrollingElement.height() - _this.ScrollingContent.height()) + "px";
            //    _this.ScrollingContent.after(filler);
            //} else {
            // scroll down to hide empty room
            _this.Initialized = true;
            //}
        };

        _this.LoadFollowing = function () {
            _this.IsLoading = true;
            _this.LoadFollowingDelegatePromise().done(function () {
                _this.IsLoading = false;
                if (!_this.Initialized) {
                    _this.SetupHeightStyle();
                }
            });
        };

        _this.LoadPrevious = function () {
            _this.IsLoading = true;
            _this.LoadPreviousDelegatePromise().done(function () {
                _this.IsLoading = false;
            });
        };

        _this.ScrollFunction = function () { };

        _this.InitPaginator = function () {
            _this.ScrollingContent.on('scroll', _this.ScrollAction);
        };

        _this.ScrollAction = function (e) {
            _this.MoveUpDirection = false;
            if (_this.IsLoading || _this.AvoidNextScroll) {
                return;
            }

            var scrollPosition = _this.getScrollPosition();
            _this.MoveUpDirection = scrollPosition <= _this.LastScroll;
            _this.LastScroll = scrollPosition;

            _this.ScrollFunction();

            if (_this.NotMoreContent)
                return;

            if (scrollPosition == 0 && _this.LoadPreviousDelegatePromise !== null) {
                _this.LoadPrevious();
            } else if (_this.ScrollIsOnBottomZone()) {
                _this.LoadFollowing();
            }
        };

        _this.ScrollIsOnBottomZone = function () {
            var scrollPos = _this.getScrollPosition();
            return scrollPos >= -_this.actionBottomToPx + (_this.ScrollingElement.height() - _this.ScrollingContent.height());
        };

        _this.ScrollIsOnTop = function () {
            var scrollPos = _this.getScrollPosition();
            return scrollPos === 0;
        };

        _this.ScrollIsOnBottom = function () {
            var scrollPos = _this.getScrollPosition();
            return scrollPos >= (_this.ScrollingElement.height() - _this.ScrollingContent.height());
        };

        _this.getScrollPosition = function () {
            return _this.ScrollingContent.scrollTop();
        };

        _this.moveToPosition = function (positionTop) {
            //_this.AvoidNextScroll = true;
            _this.ScrollingContent.scrollTop(positionTop);
        };

        _this.MoveScroll = function (pixels) {
            var pos = _this.getScrollPosition();
            _this.moveToPosition(pos + pixels);
        };

        _this.animateToPosition = function (positionTop) {
            //_this.AvoidNextScroll = true;
            // Stopping the animation: if the scroll is already in movement, we must to stop it avoiding stacking the animations
            _this.ScrollingContent.stop();
            _this.ScrollingContent.animate({ scrollTop: positionTop }, 1000);
        };

        _this.endedList = function () {
            _this.endOfList = true;
            _this.LoadingMore.hide();
        };

        _this.setAvoidNextScroll = function (value) {
            _this.AvoidNextScroll = value;
        };

        return _this;
    };
    FXStreet.Class.InfiniteScrollPage = function () {
        var parent = FXStreet.Class.InfiniteScroll(),
          _this = FXStreet.Util.extendObject(parent);

        _this.LoadContentDelegatePromise_ObserverSubject = null;
        _this.ScrollActionDelegatePromise_ObserverSubject = null;

        _this.init = function (json) {
            parent.init(json);
            _this.setSettingsByObject(json);
            _this.setVars();
        };

        _this.setVars = function () {
            parent.setVars();
            _this.LoadContentDelegatePromise_ObserverSubject = new FXStreet.Class.Patterns.Observer.Subject();
            _this.ScrollActionDelegatePromise_ObserverSubject = new FXStreet.Class.Patterns.Observer.Subject();
        };

        _this.VisibleHeight = function (element) {
            var $el = $(element);
            var elH = $el.outerHeight();
            var H = $(window).height();
            var r = $el[0].getBoundingClientRect(), t = r.top, b = r.bottom;
            return Math.max(0, t > 0 ? Math.min(elH, H - t) : (b < H ? b : H));
        };

        _this.whenLoadContent = function (functionDelegate) {
            if (functionDelegate !== undefined && functionDelegate !== null) {
                var json = { 'UpdateDelegate': functionDelegate };
                var observer = new FXStreet.Class.Patterns.Observer.Observer();
                observer.init(json);
                _this.LoadContentDelegatePromise_ObserverSubject.addObserver(observer);
            }
        };

        _this.whenScroll = function (functionDelegate) {
            if (functionDelegate !== undefined && functionDelegate !== null) {
                var json = { 'UpdateDelegate': functionDelegate };
                var observer = new FXStreet.Class.Patterns.Observer.Observer();
                observer.init(json);
                _this.ScrollActionDelegatePromise_ObserverSubject.addObserver(observer);
            }
        };

        parent.LoadFollowingDelegatePromise = function () {
            return $.when(_this.LoadContentDelegatePromise_ObserverSubject.notify());
        };

        parent.LoadPreviousDelegatePromise = function () {
            return $.when(_this.LoadContentDelegatePromise_ObserverSubject.notify());
        };

        parent.ScrollFunction = function () {
            _this.ScrollActionDelegatePromise_ObserverSubject.notify();
        };

        return _this;
    };

    FXStreet.Class.ListTemplate_Mobile = function () {
        var parent = FXStreet.Class.Base(),
           _this = FXStreet.Util.extendObject(parent);

        _this.MenuLeftContainerId = '';
        _this.MenuRightContainerId = '';
        _this.ListLeftContainerId = '';
        _this.ShowMenuLeftId = '';
        _this.ShowMenuRightId = '';
        _this.ListViewContainerId = '';
        _this.ScrollingElementId = '';
        _this.ScrollingContentId = '';

        _this.MenuLeftContainer = null;
        _this.MenuRightContainer = null;
        _this.ListLeftContainer = null;
        _this.ShowMenuRight = null;
        _this.Body = null;
        _this.ResponsiveDesignObj = null;
        _this.ListViewContainer = null;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
        };

        _this.setVars = function () {
            _this.MenuLeftContainer = FXStreet.Util.getjQueryObjectById(_this.MenuLeftContainerId);
            _this.MenuRightContainer = FXStreet.Util.getjQueryObjectById(_this.MenuRightContainerId);
            _this.ListLeftContainer = FXStreet.Util.getjQueryObjectById(_this.ListLeftContainerId);
            _this.ShowMenuLeft = FXStreet.Util.getjQueryObjectById(_this.ShowMenuLeftId);
            _this.ShowMenuRight = FXStreet.Util.getjQueryObjectById(_this.ShowMenuRightId);
            _this.ListViewContainer = FXStreet.Util.getjQueryObjectById(_this.ListViewContainerId);
            _this.Body = $('body');
            _this.ResponsiveDesignObj = FXStreet.Util.getObjectInstance("ResponsiveDesign");

            FXStreet.Util.initObject({
                objType: 'InfiniteScrollPage',
                json: {
                    ScrollingElement: $(_this.ScrollingElementId),
                    ScrollingContent: $(_this.ScrollingContentId),
                    LoadingMoreId: 'pageLoading'
                }
            });
        };

        _this.addEvents = function () {
            _this.ShowMenuLeft.on('click', _this.ShowMenuLeftClick);
            _this.ShowMenuRight.on('click', _this.ShowMenuRightClick);
            if (_this.ResponsiveDesignObj !== null) {
                _this.ResponsiveDesignObj.whenWindowsDesignTeamReduceLimit(_this.resetMenu);
                _this.ResponsiveDesignObj.whenWindowsDesignTeamIncreaseLimit(_this.resetMenu);
            }
        };

        _this.ShowMenuLeftClick = function () {
            _this.showMenuClick(_this.ShowMenuLeft, _this.MenuLeftContainer, 'cbp-spmenu-push-toright');
        };

        _this.ShowMenuRightClick = function () {
            _this.showMenuClick(_this.ShowMenuRight, _this.MenuRightContainer, 'cbp-spmenu-push-toleft');
        };

        _this.showMenuClick = function (showMenuClicked, container, bodyClass) {
            _this.disableAll();
            FXStreet.ExternalLib.Classie.toggle(showMenuClicked[0], 'active');
            FXStreet.ExternalLib.Classie.toggle(_this.Body[0], bodyClass);
            FXStreet.ExternalLib.Classie.toggle(container[0], 'cbp-spmenu-open');
            _this.ListViewContainer.removeClass('cbp-spmenu-open');
            $('.fxs_toggleList').removeClass('active');
        };


        _this.disableAll = function () {
            FXStreet.ExternalLib.Classie.toggle(_this.ShowMenuLeft[0], 'disable');
            FXStreet.ExternalLib.Classie.toggle(_this.ShowMenuRight[0], 'disable');
        };

        _this.resetMenu = function () {
            _this.Body.removeClass('cbp-spmenu-push-toright');
            _this.Body.removeClass('cbp-spmenu-push-toleft');
            _this.MenuLeftContainer.removeClass('cbp-spmenu-open');
            _this.MenuRightContainer.removeClass('cbp-spmenu-open');
            _this.ListLeftContainer.removeClass('cbp-spmenu-open');
        };

        return _this;
    };
    FXStreet.Class.ListTemplate_Tablet = function () {
        var parent = FXStreet.Class.ListTemplate_Mobile(),
           _this = FXStreet.Util.extendObject(parent);

        _this.ShowListLeftId = '';

        _this.ShowListLeft = null;

        _this.init = function (json) {
            parent.init(json);
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
        };

        _this.setVars = function () {
            _this.ShowListLeft = FXStreet.Util.getjQueryObjectById(_this.ShowListLeftId);
        };

        _this.addEvents = function () {
            _this.ShowListLeft.on('click', _this.showListLeftClick);

            if (_this.ResponsiveDesignObj) {
                _this.ResponsiveDesignObj.whenWindowsResizeToMobile(_this.removeSwipe);
                _this.ResponsiveDesignObj.whenWindowsResizeToTablet(_this.setSwipe);
                _this.ResponsiveDesignObj.whenWindowsResizeToDesktop(_this.removeSwipe);
                _this.ResponsiveDesignObj.whenWindowsDesignTeamReduceLimit(_this.removeSwipe);
                _this.ResponsiveDesignObj.whenWindowsDesignTeamIncreaseLimit(_this.removeSwipe);

                if (_this.ResponsiveDesignObj.DeviceType === 'Tablet') {
                    _this.setSwipe();
                }
            }
        };

        _this.listSwipe = function () {
            _this.showListLeftClick();
        };
        
        _this.removeSwipe = function () {
            _this.MenuRightContainer.off('swiperight');
            _this.MenuLeftContainer.off('swipeleft');
            _this.ListLeftContainer.off('swipeleft');
        };

        _this.setSwipe = function () {
            _this.removeSwipe();
            _this.MenuRightContainer.on('swiperight', _this.ShowMenuRightClick);
            _this.MenuLeftContainer.on('swipeleft', _this.ShowMenuLeftClick);
            _this.ListLeftContainer.on('swipeleft', _this.listSwipe);
        };

        _this.showListLeftClick = function () {
            _this.disableAll();
            FXStreet.ExternalLib.Classie.toggle(_this.ShowListLeft[0], 'active');
            FXStreet.ExternalLib.Classie.toggle(_this.ListLeftContainer[0], 'cbp-spmenu-open');
        };
        
        _this.disableAll = function () {
            parent.disableAll();
            FXStreet.ExternalLib.Classie.toggle(_this.ShowListLeft[0], 'disable');
        };

        return _this;
    };
    FXStreet.Class.ListTemplate_Desktop = function () {
        var parent = FXStreet.Class.ListTemplate_Tablet(),
           _this = FXStreet.Util.extendObject(parent);
        
        return _this;
    };

    FXStreet.Class.Menu = function () {
        var parent = FXStreet.Class.Base(),
         _this = FXStreet.Util.extendObject(parent);

        _this.VerticalMenuId = '';
        _this.HorizontalMenuId = '';
        _this.VerticalMenu = null;
        _this.HorizontalMenu = null;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
        };

        _this.setVars = function () {
            _this.VerticalMenu = FXStreet.Util.getjQueryObjectById(_this.VerticalMenuId);
            _this.HorizontalMenu = FXStreet.Util.getjQueryObjectById(_this.HorizontalMenuId);
        };

        _this.addEvents = function () {
            var responsiveDesignObj = FXStreet.Util.getObjectInstance("ResponsiveDesign");
            if (responsiveDesignObj !== undefined && responsiveDesignObj !== null) {
                if (responsiveDesignObj.IsSmallerThanWidthLimit)
                    _this.menuToVertical();

                responsiveDesignObj.whenWindowsDesignTeamReduceLimit(_this.menuToVertical);
                responsiveDesignObj.whenWindowsDesignTeamIncreaseLimit(_this.menuToHorizontal);
            }
        };

        _this.menuToHorizontal = function () {
            _this.HorizontalMenu.html(_this.VerticalMenu.html());
            _this.VerticalMenu.empty();
        };

        _this.menuToVertical = function () {
            _this.VerticalMenu.html(_this.HorizontalMenu.html());
            _this.HorizontalMenu.empty();
        };

        return _this;
    };

    FXStreet.Class.PostList = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        // ----- begin json properties -----

        _this.ContainerId = "";
        _this.Category = "";
        _this.Take = 0;
        _this.HtmlTemplateFile = "";

        // ----- end json properties -----

        _this.Url = FXStreet.Resource.FxsApiRoutes["PostGetList"];
        _this.Container = null;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.callPostListApi();
        };

        _this.setVars = function () {
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.ContainerId);
            _this.Take = +(_this.Take);
        };

        _this.callPostListApi = function () {
            var data = {
                "Categories": [_this.Category],
                "Take": _this.Take,
                "CultureName": FXStreet.Resource.CultureName,
                "Page": 1
            };

            $.ajax({
                type: "GET",
                url: _this.Url,
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(_this.searchSuccess);
        };

        _this.searchSuccess = function (posts) {
            var jsonData = {
                "posts": posts
            };

            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateFile).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
                _this.Container.html(rendered);
                _this.loadHtmlTemplateSuccessComplete();
            });
        };

        _this.loadHtmlTemplateSuccessComplete = function () {
        };

        return _this;
    };
    FXStreet.Class.PostListHorizontal = function () {
        var parent = FXStreet.Class.PostList(),
            _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
        };

        parent.loadHtmlTemplateSuccessComplete = function () {
            parent.Container.find(".fxs_entriesList_carousel .fxs_carousel_wrapper .carousel").jCarouselLite({
                btnNext: ".fxs_entriesList_carousel .fxs_next",
                btnPrev: ".fxs_entriesList_carousel .fxs_prev",
                mouseWheel: true
            });
        };

        return _this;
    };
    FXStreet.Class.PostListVertical = function () {
        var parent = FXStreet.Class.PostList(),
            _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
        };

        return _this;
    };

    FXStreet.Class.HighlightedNewsItem = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        var postImageSizeMapping = (function () {
            var postImageSize = {
                undefined: "Undefined",
                hero: "XL",
                large: "L",
                medium: "M",
                small: "S"
            };

            function map(name) {
                var result = postImageSize[name.toLowerCase()];
                if (result === undefined)
                    return postImageSize["undefined"];
                return result;
            };

            return {
                map: map
            };
        })();

        _this.NewsItemUrl = "";
        _this.HtmlTemplate = "";
        _this.HtmlTemplateName = "";

        _this.Url = FXStreet.Resource.FxsApiRoutes["PostGetByUrl"];

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
        };

        _this.generateHtml = function (callbackFunction) {
            _this.callPostApi().done(function (data) {
                _this.htmlRender(data, callbackFunction);
            });
        };

        _this.callPostApi = function () {
            var postImageSize = postImageSizeMapping.map(_this.HtmlTemplateName);

            var data = {
                "Url": _this.NewsItemUrl,
                "PostImageSize": postImageSize,
                "CultureName": FXStreet.Resource.CultureName
            };

            return $.ajax({
                type: "GET",
                url: _this.Url,
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            });
        };

        _this.htmlRender = function (data, callbackFunction) {
            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplate).done(function (template) {
                var html = FXStreet.Util.renderByHtmlTemplate(template, data);
                html += _this.htmlForDynamicSeo(data);
                callbackFunction(html);
            });
        };

        _this.htmlForDynamicSeo = function (data) {
            var containerId = FXStreet.Util.guid();

            var json = {
                "ContainerId": containerId,
                "PostJson": data
            };

            var seoHtml = $("<div>")
                            .attr("id", containerId)
                                .attr("fxs_createevent", "load")
                                    .attr("fxs_objtype", "HighlightedNewsItemSeo")
                                        .attr("fxs_json", FXStreet.Util.serializeJsonForAttr(json));

            return seoHtml[0].outerHTML;
        };

        return _this;
    };
    FXStreet.Class.HighlightedNewsItemSeo = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        _this.ContainerId = "";
        _this.PostJson = {};

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.seoRender();
        };

        _this.setVars = function () {
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.ContainerId);
        };

        _this.seoRender = function () {
            var seoTemplateName = "highlightednewsitem_seo.html";

            FXStreet.Util.loadHtmlTemplate(seoTemplateName).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, _this.PostJson);
                _this.Container.append(rendered);
            });
        };

        return _this;
    };

    FXStreet.Class.SubscribeToNewsletter = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        // ----- begin json properties -----

        _this.ContainerId = '';
        _this.LoggedUser = false;
        _this.SubscribeUrl = '';
        _this.SubmitId = '';
        _this.SuccessId = '';
        _this.CommonName = '';
        _this.EmailRequired = '';
        _this.EmailIsNotValid = '';
        _this.SubscribeTitle = '';
        _this.SubscribeButtonText = '';
        _this.Newsletters = [];
        _this.SocialTitle = '';
        _this.SocialMediaChannels = [];
        _this.Email = '';

        // ----- end json properties -----

        _this.Container = null;
        _this.TextBox = null;
        _this.Submit = null;
        _this.HtmlTemplateFile = 'subscribe_default.html';

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
            _this.initialize();

            _this.htmlRender(json);
        };

        _this.setVars = function () {
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.ContainerId);

            _this.Newsletters = _this.Newsletters;
            _this.SocialMediaChannels = _this.SocialMediaChannels;

            _this.SubscribeUrl = FXStreet.Resource.FxsApiRoutes["NewsletterSubscribe"];
        };

        _this.addEvents = function () {
        };

        _this.initialize = function () {
            return;
            _this.Success.hide();
        };

        _this.htmlRender = function (jsonData) {
            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateFile).done(function (template) {
                _this.onRendered(template, jsonData);
            });
        };

        _this.onRendered = function (template, jsonData) {
            jsonData.TwitterUrl = $.findFirst(_this.SocialMediaChannels, function (e) { return e.Name === 'Twitter'; }).Url;
            jsonData.LinkedinUrl = $.findFirst(_this.SocialMediaChannels, function (e) { return e.Name === 'Linkedin'; }).Url;
            jsonData.FacebookUrl = $.findFirst(_this.SocialMediaChannels, function (e) { return e.Name === 'Facebook'; }).Url;
            jsonData.GooglePlusUrl = $.findFirst(_this.SocialMediaChannels, function (e) { return e.Name === 'Google+'; }).Url;

            var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
            _this.Container.html(rendered);

            _this.TextBox = FXStreet.Util.getjQueryObjectById('inputMail_' + _this.ContainerId);
            _this.TextBox.on('keydown', _this.textBoxKeyDown);

            _this.TextBox.val(_this.Email);

            var submit = FXStreet.Util.getjQueryObjectById('submit_' + _this.ContainerId);
            submit.on('click', _this.submit);
        };

        _this.textBoxKeyDown = function (e) {
            if (e.keyCode == 13) {
                _this.textBoxEnter();
            }
        };

        _this.submit = function () {
            var email = '';
            if (!_this.LoggedUser) {
                email = _this.TextBox.val();
                if (!email) {
                    console.log(_this.EmailRequired);
                    return false;
                }
                var validEmail = is.email(email);
                if (!validEmail) {
                    console.log(_this.EmailIsNotValid);
                    return false;
                }
            }

            $.ajax({
                url: _this.SubscribeUrl + '?email=' + email,
                type: 'POST',
                dataType: 'json',
                success: _this.onSubmitSuccess,
                error: _this.onSubmitError
            });
            return false;
        };

        _this.onSubmitSuccess = function () {
            $('div.fxs_suscribe').fadeOut(500);
            //_this.Success.show();
            //setTimeout(function () {
            //    _this.Success.fadeOut(500);
            //}, 2000);
        };

        _this.onSubmitError = function (xhr, status) {
            alert(status);
        };

        _this.textBoxEnter = function () {
            _this.Submit.click();
        };

        return _this;
    };

    FXStreet.Class.AdvertiseBase = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        // ----- begin json properties -----

        _this.ContainerId = "";
        _this.SlotName = "";
        _this.LabelKey = "";
        _this.LabelValue = "";
        _this.MobileSize = [];
        _this.TabletSize = [];
        _this.DesktopSize = [];
        _this.RefreshSeconds = 0;

        // ----- end json properties -----

        _this.Container = null;
        _this.GoogleTag = FXStreet.ExternalLib.GoogleTag;
        _this.ResponsiveSeparator = '-';
        _this.Slot = null;

        _this.MinTabletSize = [768, 0];
        _this.MinDesktopSize = [1200, 0];

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
            _this.setAdvertise();
        };

        _this.setVars = function () {
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.ContainerId);
            _this.MobileSize = $.parseJSON(_this.MobileSize);
            _this.TabletSize = $.parseJSON(_this.TabletSize);
            _this.DesktopSize = $.parseJSON(_this.DesktopSize);
        };

        _this.setAdvertise = function () {
            _this.GoogleTag.cmd.push(function () {
                _this.createSlot();
            });
        };

        _this.renderAdvertise = function () {
            _this.GoogleTag.cmd.push(function () {
                _this.GoogleTag.display(_this.ContainerId);

                if (_this.RefreshSeconds > 0) {
                    setInterval(function () {
                        _this.GoogleTag.pubads().refresh([_this.Slot]);
                    }, _this.RefreshSeconds);
                } else {
                    _this.GoogleTag.pubads().refresh([_this.Slot]);
                }
            });
        };

        _this.createSlot = function () {
            _this.Slot = _this.GoogleTag.defineSlot(_this.SlotName, [], _this.ContainerId).addService(_this.GoogleTag.pubads());
            _this.setTargeting();
            _this.setResponsive();
        };

        _this.setTargeting = function () {
            if (_this.LabelKey && _this.LabelValue) {
                _this.Slot.setTargeting(_this.LabelKey, _this.LabelValue);
            }
        };

        _this.setResponsive = function () {
            var mapping = _this.GoogleTag.sizeMapping().
                addSize([0, 0], _this.MobileSize).
                addSize(_this.MinTabletSize, _this.TabletSize). // Tablet
                addSize(_this.MinDesktopSize, _this.DesktopSize). // Desktop
                build();

            _this.Slot.defineSizeMapping(mapping);
        };

        _this.containerOuterHtml = function () {
            return _this.Container[0].outerHTML;
        };

        _this.addEvents = function () {
            var responsiveDesignObj = FXStreet.Util.getObjectInstance("ResponsiveDesign");
            if (responsiveDesignObj !== undefined && responsiveDesignObj !== null) {
                responsiveDesignObj.whenWindowsResizeToMobile(_this.refreshAd);
                responsiveDesignObj.whenWindowsResizeToTablet(_this.refreshAd);
                responsiveDesignObj.whenWindowsDesignTeamReduceLimit(_this.refreshAd);
                responsiveDesignObj.whenWindowsDesignTeamIncreaseLimit(_this.refreshAd);
            }
        };

        _this.refreshAd = function () {
            _this.GoogleTag.pubads().refresh([_this.Slot]);
        };

        return _this;
    };
    FXStreet.Class.AdvertiseNormal = function () {
        var parent = FXStreet.Class.AdvertiseBase(),
            _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
            _this.renderAdvertise();
        };

        return _this;
    };
    FXStreet.Class.AdvertisePopup = function () {
        var parent = FXStreet.Class.AdvertiseBase(),
            _this = FXStreet.Util.extendObject(parent);

        _this.FadeInMilis = "";
        _this.FadeOutMilis = "";
        _this.StartFadeOutMilis = "";
        _this.Popup = null;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            parent.init(json);

            _this.createPopup();
            _this.showPopup();
            _this.setAdvertise();
            _this.renderAdvertise();
        };

        _this.createPopup = function () {
            var parentContainer = _this.Container.parent();
            _this.Popup = $('<div class="fullscreen hide aligner popup"></div>');
            parentContainer.append(_this.Popup);

            var dimout = $('<div class="fullscreen dimout"></div>');
            var ad = $("<div class='ad'></div>");
            ad.append(_this.Container);

            _this.Popup.append(dimout);
            _this.Popup.append(ad);
        };

        _this.showPopup = function () {
            _this.Popup.fadeIn(_this.FadeInMilis);
            _this.Popup.css('display', 'flex');
            setTimeout(function () {
                _this.Popup.fadeOut(_this.FadeOutMilis);
            }, _this.StartFadeOutMilis);
        };

        return _this;
    };

    FXStreet.Class.Alert = function () {
        var parent = FXStreet.Class.Base(),
       _this = FXStreet.Util.extendObject(parent);

        _this.ContainerId = "";
        _this.Container = null;
        _this.Summary = "";
        _this.Url = "";
        _this.Title = "";
        _this.HtmlTemplateFile = "";
        _this.AlertType = "";

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.render();
        };

        _this.setVars = function () {
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.ContainerId);
        };

        _this.render = function () {
            var jsonData = {
                CssSuffix: _this.AlertType.toLowerCase(),
                Title: _this.Title,
                Summary: _this.Summary,
                Url: _this.Url
            };

            _this.htmlRender(jsonData);
            _this.seoRender(jsonData);
        };

        _this.htmlRender = function (jsonData) {
            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateFile).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
                _this.Container.html(rendered);
                _this.Container.find(".fxs_close").on('click', function () {
                    _this.Container.hide();
                });
            });
        };

        _this.seoRender = function (jsonData) {
            //TODO. Omar. Improve this way of retrieve template name. 
            // Put in Configuration or Create a Js obj with a dictionary of seo templates names.
            var templateName = _this.HtmlTemplateFile.indexOf("dynamic") >= 0 ? "dynamic" : "static";
            var seoTemplateName = templateName + "alert_seo.html";

            FXStreet.Util.loadHtmlTemplate(seoTemplateName).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
                _this.Container.append(rendered);
            });
        };

        return _this;
    };

    FXStreet.Class.TextOverCustomImage = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        _this.ContainerId = "";
        _this.Container = null;
        _this.Name = "";
        _this.Title = "";
        _this.Summary = "";
        _this.ImageUrl = "";
        _this.TextUrl = "";
        _this.HtmlTemplateFile = "";
        _this.AlertType = "";

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.htmlRender();
        };

        _this.setVars = function () {
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.ContainerId);
        };

        _this.htmlRender = function () {
            var jsonData = {
                Name: _this.Name,
                Title: _this.Title,
                Summary: _this.Summary,
                ImageUrl: _this.ImageUrl
            };
            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateFile).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
                _this.Container.html(rendered);
                _this.Container.find(".fxs_sexy_bannerText").on('click', function () {
                    window.location.replace(_this.TextUrl);
                });
            });
        };

        return _this;
    };

    FXStreet.Class.Sidebar_FilterAndList = function () {
        var parent = FXStreet.Class.Base(),
           _this = FXStreet.Util.extendObject(parent);

        _this.FindBy_Options = []; // array of object { FindBy_FxsApiRoute: '', QueryStringKey: ''}
        _this.FilterBy_FxsApiRoute = "";
        _this.TypeaheadId = "";
        _this.ListItemsContainerId = "";
        _this.ScrollingContainerId = "";
        _this.ContainerItemsInPageId = "";
        _this.SidebarFeedbackLoadingMsgId = "";
        _this.SidebarFeedbackNoMoreContentMsgId = "";
        _this.SidebarNewItemsAlertId = "";
        _this.NewsItemUpdateTextFormat = "";
        _this.SidebarSeeLatestNewsId = "";
        _this.SidebarSeeLatestNewsText = "";
        _this.NewItemsCreated_FxsApiRoute = "";
        _this.NotificationObjName = "";
        _this.TypeaheadFilterButtonId = "";
        _this.TypeaheadCancelButtonId = "";
        _this.CurrentQueryStringValues = [];
        _this.HomePage = false;
        _this.IsNewReferral = false;
        _this.SelectedTypeaheadId = "";
        _this.HomeId = "";

        _this.Sidebar_FilterObj = null;
        _this.Sidebar_ListObj = null;
        _this.InfiniteScrollPageObj = null;
        _this.ContainerItemsInPage = null;

        _this.currentVisible = null;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
        };

        _this.setVars = function () {
            _this.ContainerItemsInPage = FXStreet.Util.getjQueryObjectById(_this.ContainerItemsInPageId);

            _this.Sidebar_ListObj = new FXStreet.Class.Sidebar.List();
            _this.Sidebar_ListObj.init({
                ListItemsContainerId: _this.ListItemsContainerId,
                ScrollingContainerId: _this.ScrollingContainerId,
                FilterBy_FxsApiRoute: _this.FilterBy_FxsApiRoute,
                SidebarFeedbackLoadingMsgId: _this.SidebarFeedbackLoadingMsgId,
                SidebarFeedbackNoMoreContentMsgId: _this.SidebarFeedbackNoMoreContentMsgId,
                CurrentQueryStringValues: _this.CurrentQueryStringValues,
                HomePage: _this.HomePage,
                IsNewReferral: _this.IsNewReferral
            });

            _this.Sidebar_FilterObj = new FXStreet.Class.Sidebar.Filter();
            _this.Sidebar_FilterObj.init({
                FindBy_Options: _this.FindBy_Options,
                TypeaheadId: _this.TypeaheadId,
                OptionSelectedDelegate: _this.filterChanged,
                NewItemCreatedDelegate: _this.newItemCreated,
                SidebarNewItemsAlertId: _this.SidebarNewItemsAlertId,
                NewsItemUpdateTextFormat: _this.NewsItemUpdateTextFormat,
                SidebarSeeLatestNewsId: _this.SidebarSeeLatestNewsId,
                SidebarSeeLatestNewsText: _this.SidebarSeeLatestNewsText,
                NewItemsCreated_FxsApiRoute: _this.NewItemsCreated_FxsApiRoute,
                NotificationObjName: _this.NotificationObjName,
                TypeaheadFilterButtonId: _this.TypeaheadFilterButtonId,
                TypeaheadCancelButtonId: _this.TypeaheadCancelButtonId,
                SelectedTypeaheadId: _this.SelectedTypeaheadId,
                IsNewReferral: _this.IsNewReferral
            });

            var postNotificationsObj = new FXStreet.Class.PostNotifications();
            postNotificationsObj.init();
            postNotificationsObj.whenPostCreated(_this.Sidebar_FilterObj.newPostCreated);

            _this.InfiniteScrollPageObj = FXStreet.Util.getObjectInstance("InfiniteScrollPage");
        };

        _this.addEvents = function () {
            if (_this.InfiniteScrollPageObj !== undefined && _this.InfiniteScrollPageObj !== null) {
                _this.InfiniteScrollPageObj.whenLoadContent(_this.scrollPageLoadFollowing);
                _this.InfiniteScrollPageObj.whenScroll(_this.scrollPageAction);
            }
        };

        _this.filterChanged = function (optionSelected, valueSelected) {
            if (optionSelected) {
                _this.Sidebar_ListObj.clearListValues();    // TODO: si cambiamos el filtro, por ahora, limpiamos todos los datos que tenemos para evitar ensuciar mas el codigo. Tendriamos que estudiar como intentar aprovechar datos ya cargados 
                var queryString = _this.CurrentQueryStringValues;
                $.removeFirst(queryString, function (item) { return item.Key === 'Categories'; });
                if (_this.Sidebar_ListObj.InfiniteScroll) {
                    _this.Sidebar_ListObj.InfiniteScroll.NotMoreContent = false;
                }
                if (valueSelected !== null) {
                    $.removeFirst(queryString, function (item) { return item.Key === 'NewsUrl'; });
                    queryString.push({ Key: optionSelected, Value: valueSelected });
                    _this.Sidebar_ListObj.SetNumberResult();
                } else {
                    _this.Sidebar_ListObj.HideNumberResult();
                }

                _this.Sidebar_ListObj.Render(queryString);
            }
        };

        _this.newItemCreated = function (route, queryString, newItemsCreatedCount) {
            _this.Sidebar_ListObj.LoadNewItemsCreated(route, queryString, newItemsCreatedCount);
        };

        _this.scrollPageLoadFollowing = function () {
            if (_this.InfiniteScrollPageObj.MoveUpDirection) {
                _this.Sidebar_ListObj.loadPrevious();
            } else {
                _this.Sidebar_ListObj.loadNext();
            }
        };

        _this.scrollPageAction = function () {
            var visibleItems = _this.ContainerItemsInPage.children('section:visible');
            var firstItem = visibleItems[0];
            var lastItem = visibleItems[visibleItems.length - 1];
            visibleItems.each(function (i, it) {
                it.visibleHeight = _this.InfiniteScrollPageObj.VisibleHeight(it);
            });
            visibleItems.sort(function (a, b) {
                return b.visibleHeight - a.visibleHeight;
            });
            var item = visibleItems[0];

            if (item && _this.currentVisible !== item) {
                _this.setCurrentVisible(item);
            } else {
                if (_this.InfiniteScrollPageObj.ScrollIsOnBottom() && !_this.Sidebar_ListObj.InfiniteScroll.endOfList) {
                    if (lastItem && !FXStreet.Class.Sidebar.Util.IsLastVisibleItem()) {
                        _this.setCurrentVisible(lastItem);
                    } else {
                        _this.InfiniteScrollPageObj.endedList();
                    }
                } else if (_this.InfiniteScrollPageObj.ScrollIsOnTop() && item !== firstItem) {
                    var post = $(firstItem).attr("fxs_it_position");
                    _this.Sidebar_ListObj.RenderizableListItemsCurrentIndex = post;
                    //    var currentPosition = post ? parseInt(post) : -1;
                    //    if (currentPosition > 0) {
                    //        _this.Sidebar_ListObj.setCurrent(currentPosition - 1);
                    //    }
                }
            }

        };

        _this.setCurrentVisible = function (item) {
            function setHome() {
                FXStreet.Util.updateHomeUrl();
            }

            _this.currentVisible = item;
            if (item.id === _this.HomeId) {
                setHome();
            } else {
                var url = $(item).find('article').attr("fxs_it_url");
                var title = $(item).find('h1').text();
                if (url) {
                    FXStreet.Util.updateNewsUrl(url, title);
                }
            }

            var post = $(item).attr("fxs_it_position");
            var currentPosition = post ? parseInt(post) : -1;
            _this.Sidebar_ListObj.setCurrent(currentPosition);
        };

        return _this;
    };
    FXStreet.Class.Sidebar = {};
    FXStreet.Class.Sidebar.Util = {};
    FXStreet.Class.Sidebar.Util.RenderizableListItems = [];
    FXStreet.Class.Sidebar.Util.renderList = function (listDataServer, resultObjRef, renderCallback,
        clickCallback, prepend, isNewReferral) {

        var createAndInitializeObj = function (json) {
            var result = new FXStreet.Class.Sidebar.ListItemType[json.Type]();
            json.ClickCallback = clickCallback;
            result.init(json);
            return result;
        };

        var alreadyExists = function (resultObjRef, obj) {
            for (var j = 0; j < resultObjRef.length; j++) {
                if (resultObjRef[j].Id === obj.Id) {
                    return true;
                }
            }
            return false;
        };

        var addToResultObjRef = function (resultObjRef, obj, prepend, index) {
            if (prepend) {
                resultObjRef.splice(index, 0, obj);
            } else {
                resultObjRef.push(obj);
            }
        };

        var addToRenderizableListItems = function (obj, prepend, index) {
            if (prepend) {
                FXStreet.Class.Sidebar.Util.RenderizableListItems.splice(index, 0, obj);
                obj.RenderedItemInPage.setPositionInRenderizableListItems(index);
            } else {
                FXStreet.Class.Sidebar.Util.RenderizableListItems.push(obj);
                obj.RenderedItemInPage.setPositionInRenderizableListItems(FXStreet.Class.Sidebar.Util.RenderizableListItems.length - 1);
            }
        };

        if (listDataServer !== undefined && listDataServer !== null) {
            resultObjRef = resultObjRef || [];
            for (var i = 0; i < listDataServer.length; i++) {
                if (FXStreet.Class.Sidebar.ListItemType[listDataServer[i].Type]) {

                    var obj = createAndInitializeObj(listDataServer[i]);
                    if (i == 0 && isNewReferral) {
                        obj.RenderedItemInPage.setContainerItem(obj.RenderedItemInPage.ContainerBody.find('section:first-child'));
                        obj.RenderedItemInPage.setAsVisible();
                    }

                    if (!alreadyExists(resultObjRef, obj)) {
                        addToResultObjRef(resultObjRef, obj, prepend, i);

                        if (obj.IsRenderizableInPage()) {
                            addToRenderizableListItems(obj, prepend, i);
                        }

                        obj.renderHtml(renderCallback);
                    }
                }
            }
        }
    };

    FXStreet.Class.Sidebar.Util.IsLastVisibleItem = function () {
        var hiddenItem = FXStreet.Class.Sidebar.Util.RenderizableListItems.findFirst(function (item) {
            return item.RenderedItemInPage.PositionInRenderizableListItems === (FXStreet.Class.Sidebar.Util.RenderizableListItems.length - 1)
                && item.RenderedItemInPage.ContainerItem.is(":visible");
        });
        return hiddenItem !== null;
    };
    FXStreet.Class.Sidebar.Filter = function () {
        var parent = FXStreet.Class.Base(),
          _this = FXStreet.Util.extendObject(parent);

        _this.TypeaheadId = "";
        _this.FindBy_Options = [];
        _this.NewItemCreatedDelegate = null;
        _this.SidebarNewItemsAlertId = "";
        _this.NewsItemUpdateTextFormat = "";
        _this.SidebarSeeLatestNewsId = "";
        _this.SidebarSeeLatestNewsText = "";
        _this.NewItemsCreated_FxsApiRoute = "";
        _this.NotificationObjName = "";
        _this.ShowLeftPushId = "";
        _this.ShowRightPushId = "";
        _this.ShowLeftId = "";
        _this.MenuLeftId = "";
        _this.MenuRightId = "";
        _this.ListViewId = "";
        _this.OptionSelectedDelegate = null;
        _this.TypeaheadFilterButtonId = "";
        _this.TypeaheadCancelButtonId = "";
        _this.SelectedTypeaheadId = "";
        _this.IsNewReferral = false;

        _this.HtmlTemplateName = "typeahead_suggestion.html";
        _this.LevenshteinThreshold = 4;

        _this.SidebarNewItemsAlert = null;
        _this.SidebarSeeLatestNews = null;
        _this.PageTitle = "";

        _this.PostsCreated = [];

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
            _this.initTypeahead();
            //_this.loadValuesOptions();
            _this.loadDefault();
        };

        _this.setVars = function () {
            _this.PageTitle = document.title;

            _this.Typeahead = FXStreet.Util.getjQueryObjectById(_this.TypeaheadId);
            _this.Suggestions = $('<div/>');
            _this.Suggestions.insertAfter(_this.Typeahead);

            _this.SidebarNewItemsAlert = FXStreet.Util.getjQueryObjectById(_this.SidebarNewItemsAlertId);
            _this.SidebarSeeLatestNews = FXStreet.Util.getjQueryObjectById(_this.SidebarSeeLatestNewsId);
            _this.SidebarSeeLatestNews.attr("href", FXStreet.Resource.PageUrl);

            if (_this.IsNewReferral === true) {
                _this.SidebarSeeLatestNews.html(_this.SidebarSeeLatestNewsText);
            }
        };

        _this.initTypeahead = function () {
            var json = {
                Id: _this.TypeaheadId,
                FindBy_Options: _this.FindBy_Options,
                TypeaheadFilterButtonId: _this.TypeaheadFilterButtonId,
                TypeaheadCancelButtonId: _this.TypeaheadCancelButtonId,
                ChangeTypeaheadDelegated: _this.ChangeTypeaheadDelegated,
                FilterDelegated: _this.ChangeTypeaheadDelegated,
                CloseDelegated: _this.CloseDelegated,
                InitialId: _this.SelectedTypeaheadId
            };

            _this.Typeahead = new FXStreet.Class.Sidebar.Typeahead();
            _this.Typeahead.init(json);
        };

        _this.resetBody = function () {
            var obj = FXStreet.Class.Sidebar.Util.RenderizableListItems[0];
            if (obj) {
                FXStreet.Class.Sidebar.Util.RenderizableListItems.forEach(function (item) {
                    item.RenderedItemInPage.setRendered(false);
                    item.RenderedItemInPage.setVisible(false);
                });
                obj.RenderedItemInPage.ContainerBody.html('');
                obj.RenderedItemInPage.moveScrollAtTop();
            }
        };

        _this.ChangeTypeaheadDelegated = function (option) {
            // TODO: como hacer un reset del body sin utilizar este recurso? Crear un utils.resetBody()?
            _this.resetBody();

            if (option) {
                _this.OptionSelectedDelegate(option.group, option.id);
                _this.DefaultLoaded = false;
            }
        };

        _this.CloseDelegated = function () {
            _this.resetBody();
            _this.loadDefault();
        };

        _this.addEvents = function () {
            _this.SidebarNewItemsAlert.on("click", _this.sidebarNewItemsAlertClick);
        };

        _this.loadDefault = function () {
            if (!_this.DefaultLoaded && _this.FindBy_Options[0]) {
                _this.OptionSelectedDelegate(_this.FindBy_Options[0].QueryStringKey, _this.SelectedTypeaheadId || null);
                _this.DefaultLoaded = _this.SelectedTypeaheadId === null;
                _this.SelectedTypeaheadId = null;
            }
        };

        _this.getMatches = function (value) {
            value = value.toLowerCase();
            var values = _this.getValuesContainings(value);
            if (values.length > 0) {
                return values;
            }

            values = _this.levenshteinMatches(value);
            return values;
        };

        _this.getValuesContainings = function (valueToMatch) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(valueToMatch), "i");
            var values = $.grep(_this.ValuesOptions, function (val) {
                return matcher.test(val.Value.Name);
            });
            values = values.sort(function (a, b) {
                var aValue = a.Value.Name, bValue = b.Value.Name;
                return aValue.indexOf(valueToMatch) - bValue.indexOf(valueToMatch);
            });
            return values;
        };

        _this.levenshteinMatches = function (valueToMatch) {
            var values = _this.ValuesOptions.slice();
            //for (var i = 0; i < _this.ValuesOptions.length; i++) {
            //    var option = _this.ValuesOptions[i];
            //    var distance = _this.getLevenshteinDistance(valueToMatch, option.Value.Name);
            //    option.distance = distance;
            //    if (distance <= _this.LevenshteinThreshold) {
            //        values.push(option);
            //    }
            //}
            values = values.sort(function (a, b) {
                var aValue = a.Value.Name, bValue = b.Value.Name;
                var distanceLength = aValue.length - bValue.length;

                return _this.getLevenshteinDistance(aValue.toLowerCase()
                    .substring(0, valueToMatch.length), valueToMatch.toLowerCase())
                    - _this.getLevenshteinDistance(bValue.toLowerCase()
                        .substring(0, valueToMatch.length), valueToMatch.toLowerCase());
            });
            return values;
        };

        _this.getLevenshteinDistance = function (a, b) {
            if (a.length === 0) return b.length;
            if (b.length === 0) return a.length;

            var matrix = [];

            // increment along the first column of each row
            var i;
            for (i = 0; i <= b.length; i++) {
                matrix[i] = [i];
            }

            // increment each column in the first row
            var j;
            for (j = 0; j <= a.length; j++) {
                matrix[0][j] = j;
            }

            // Fill in the rest of the matrix
            for (i = 1; i <= b.length; i++) {
                for (j = 1; j <= a.length; j++) {
                    if (b.charAt(i - 1) == a.charAt(j - 1)) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    } else {
                        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                                                Math.min(matrix[i][j - 1] + 1, // insertion
                                                         matrix[i - 1][j] + 1)); // deletion
                    }
                }
            }

            return matrix[b.length][a.length];
        };

        _this.typeaheadBlur = function () {
            setTimeout(function () {
                _this.Suggestions.html('');
                _this.removeIfInvalid();
            }, 200);
        };

        _this.removeIfInvalid = function () {
            if (_this.Typeahead.val() === '') {
                return;
            }

            var optionSelected = _this.getTypeaheadSelected();
            if (optionSelected) {
                _this.Typeahead.val(optionSelected.Value.Name);
                return;
            }

            var value = _this.Typeahead.val();
            _this.Typeahead.val(_this.CurrentSelectedItem.Name);
            console.log("'" + value + "' didn't match any item");
        };

        _this.getTypeaheadSelected = function () {
            var value = _this.Typeahead.val(),
                valueLowerCase = value.toLowerCase();

            var result = $.findFirst(_this.ValuesOptions, function (item) {
                return item.Value.Name.toLowerCase() === valueLowerCase;
            });
            return result;
        };

        _this.sidebarNewItemsAlertClick = function (e) {
            var postsIds = [];
            for (var i = 0; i < _this.PostsCreated.length; i++) {
                postsIds.push(_this.PostsCreated[i].postId);
            }
            var queryString = [
            {
                Key: "Ids", Value: postsIds.join(',')
            }];

            _this.NewItemCreatedDelegate(_this.NewItemsCreated_FxsApiRoute, queryString, _this.PostsCreated.length);

            _this.PostsCreated = [];
            _this.SidebarNewItemsAlert.html("");
            document.title = _this.PageTitle;

            // Devolvemos false para evitar la acción del elemento a
            return false;
        };

        _this.newPostCreated = function (post) {
            if (_this.Typeahead.CurrentSelectedItem == null || _this.Typeahead.CurrentSelectedItem.id.length == 0) {
                _this.renderNewItemCreated(post);
            } else {
                for (var i = 0; i < post.categoriesIds.length; i++) {
                    if (post.categoriesIds[i] == _this.Typeahead.CurrentSelectedItem.id) {
                        _this.renderNewItemCreated(post);
                        break;
                    }
                }
            }
        };

        _this.renderNewItemCreated = function (item) {
            _this.PostsCreated.push(item);
            _this.SidebarNewItemsAlert.html(_this.NewsItemUpdateTextFormat.format(_this.PostsCreated.length));
            document.title = "({0}) {1}".format(_this.PostsCreated.length, _this.PageTitle);
        };

        return _this;
    };
    FXStreet.Class.Sidebar.List = function () {
        var parent = FXStreet.Class.Base(),
          _this = FXStreet.Util.extendObject(parent);

        _this.HomePage = false;
        _this.IsNewReferral = false;
        _this.ListItemsContainerId = "";
        _this.ScrollingContainerId = "";
        _this.FilterBy_FxsApiRoute = "";
        _this.SidebarFeedbackLoadingMsgId = "";
        _this.SidebarFeedbackNoMoreContentMsgId = "";
        _this.HighlightCssClass = "listView_item_active";
        _this.SidebarFeedbackLoadingMsg = null;
        _this.SidebarFeedbackNoMoreContentMsg = null;
        _this.ListItemsContainer = null;
        _this.ScrollingContainer = null;
        _this.ListValues = [];
        _this.DefaultTake = 20;
        _this.CurrentPage = 1; //defaultPage start
        _this.CurrentQueryStringValues = [];
        _this.InfiniteScroll = null;
        _this.RenderizableListItemsCurrentIndex = 0;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
        };

        _this.setVars = function () {
            _this.ListItemsContainer = FXStreet.Util.getjQueryObjectById(_this.ListItemsContainerId);
            _this.ScrollingContainer = FXStreet.Util.getjQueryObjectById(_this.ScrollingContainerId);
            _this.SidebarFeedbackLoadingMsg = FXStreet.Util.getjQueryObjectById(_this.SidebarFeedbackLoadingMsgId);
            _this.SidebarFeedbackNoMoreContentMsg = FXStreet.Util.getjQueryObjectById(_this.SidebarFeedbackNoMoreContentMsgId);
        };

        _this.Render = function (queryStringKeyValues) {
            _this.CurrentQueryStringValues = queryStringKeyValues;
            _this.CurrentPage = 1;
            _this.ListItemsContainer.html('');
            _this.renderPrivate(_this.createUrlDefaultUrl()).done(_this.ListRendered);
        };

        _this.ListRendered = function () {
            FXStreet.Util.fillPageSpace();
        };

        _this.LoadNewItemsCreated = function (apiRouteKey, queryString, newItemsCreatedCount) {
            //TODO Reload firstItem if necessary, to ensure the preload of the NewItemCreated in the right side

            $.each(FXStreet.Class.Sidebar.Util.RenderizableListItems, function (i, item) {
                item.RenderedItemInPage.IncreasePosition(newItemsCreatedCount);
            });

            _this.RenderizableListItemsCurrentIndex += newItemsCreatedCount;

            var url = _this.createUrl(apiRouteKey, queryString, 1);

            _this.renderPrivate(url, true);
        };

        _this.addHome = function (listDataServer) {
            if (FXStreet.Util.getHomeCookie()) {
                return;
            }

            var home = { Type: 'HomeNewsPage' };
            listDataServer.splice(1, 0, home);
        };

        _this.renderPrivate = function (url, prepend) {
            prepend = prepend || false;

            _this.SidebarFeedbackLoadingMsg.show();

            return $.getJSON(url, function (data) {
                if (!_this.HomePage && _this.ListValues.length === 0) {
                    _this.addHome(data);
                }

                _this.SidebarFeedbackLoadingMsg.hide();

                _this.ListItemsContainer.find("li:empty").remove();

                if (prepend) {
                    _this.renderLiForNewItems(data);
                } else {
                    _this.renderLi(data);
                }

                FXStreet.Class.Sidebar.Util.renderList(data, _this.ListValues, _this.renderCallback, _this.clickOnItem, prepend, _this.IsNewReferral);

                _this.handleNoMoreContent(data);
            });
        };

        _this.renderLi = function (data) {
            $.each(data, function (i, item) {
                var li = $("<li>").attr("id", item.Id);
                _this.ListItemsContainer.append(li);
            });
        };

        _this.renderLiForNewItems = function (data) {
            data.reverse();

            $.each(data, function (i, item) {
                var li = $("<li>").attr("id", item.Id);
                _this.ListItemsContainer.prepend(li);
            });

            data.reverse();
        };

        _this.createUrlDefaultUrl = function () {
            return _this.createUrl(_this.FilterBy_FxsApiRoute, _this.CurrentQueryStringValues, _this.CurrentPage);
        };

        _this.createUrl = function (apiRouteKey, queryString, page) {
            var defaultQuery = [
                { Key: 'take', Value: _this.DefaultTake },
                { Key: 'page', Value: page }
            ];

            var queryStringValuesKeys = $.merge(defaultQuery, queryString);

            return FXStreet.Util.createUrl(FXStreet.Resource.FxsApiRoutes[apiRouteKey], queryStringValuesKeys);
        };

        _this.handleNoMoreContent = function (data) {
            var count = 0;
            $.each(data, function (i, item) {
                if (item.Items !== undefined) {
                    count += item.Items.length;
                } else {
                    count++;
                }
            });

            if (count < _this.DefaultTake) {
                _this.InfiniteScroll.NotMoreContent = true;
                _this.SidebarFeedbackNoMoreContentMsg.show();
            }
        };

        _this.renderCallback = function (obj, html) {
            var item = _this.ListItemsContainer.find("#" + obj.Id);
            if (item !== undefined && item !== null) {
                item.replaceWith(html);
                item.off('click');
                if (obj.RenderedItemInPage) {
                    var object = FXStreet.Class.Sidebar.Util.RenderizableListItems[obj.RenderedItemInPage.PositionInRenderizableListItems];
                    $(html).on('click', function () {
                        object.click();
                    });
                }
                if (_this.IsNewReferral && obj.RenderedItemInPage && obj.RenderedItemInPage.PositionInRenderizableListItems === 0) {
                    _this.highlightItem(obj.RenderedItemInPage.PositionInRenderizableListItems);
                }
            }
            if (_this.InfiniteScroll === null) {
                _this.InfiniteScroll = _this.createInfiniteScroll();
            }
        };

        _this.createInfiniteScroll = function () {
            var result = new FXStreet.Class.InfiniteScroll();
            result.init({
                ScrollingElement: _this.ListItemsContainer,
                ScrollingContent: _this.ScrollingContainer,
                LoadFollowingDelegatePromise: _this.RenderFollowingContent,
                LoadingMoreId: 'sidebarFeedbackLoadingMsg' // TODO: hardcoded
            });
            result.ScrollingContent.on('mousewheel DOMMouseScroll', function (e) {
                var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
                    bottomOverflow = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
                    topOverflow = this.scrollTop <= 0;

                if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
                    e.preventDefault();
                }
            });
            return result;
        };

        _this.RenderFollowingContent = function () {
            _this.CurrentPage++;
            return _this.renderPrivate(_this.createUrlDefaultUrl());
        };

        _this.setCurrent = function (position) {
            var item = _this.getItemByPosition(position);

            _this.removeHighlightItem();
            _this.RenderizableListItemsCurrentIndex = position;
            if (item) {
                _this.highlightItem(position);
                _this.moveItemListToTop(item);
            }
            return _this.loadItems(position, true);
        };

        _this.setHome = function () {
            _this.removeHighlightItem();
            _this.RenderizableListItemsCurrentIndex = -1;
            _this.loadItems(0, true);
            _this.moveItemListToTop(FXStreet.Class.Sidebar.Util.RenderizableListItems[0]);
        };

        _this.moveNext = function () {
            var nextPosition = _this.RenderizableListItemsCurrentIndex + 1;
            _this.setCurrent(nextPosition);
        };

        _this.movePrevious = function () {
            var nextPosition = _this.RenderizableListItemsCurrentIndex - 1;
            _this.setCurrent(nextPosition);
        };

        _this.loadNext = function () {
            _this.loadPrivate(_this.RenderizableListItemsCurrentIndex + 1);
        };

        _this.loadPrevious = function () {
            _this.loadPrivate(_this.RenderizableListItemsCurrentIndex - 1);
        };

        _this.loadPrivate = function (position) {
            var listItems = FXStreet.Class.Sidebar.Util.RenderizableListItems;
            if (position < listItems.length && position >= 0) {
                _this.loadItems(position);
            }
        };

        _this.loadItems = function (position) {
            var listItems = FXStreet.Class.Sidebar.Util.RenderizableListItems;
            var itemsToPreload = 2;
            var promise;
            for (var i = position - itemsToPreload;
                    i <= position + itemsToPreload && i < listItems.length; i++) {
                if (i < 0) {
                    continue;
                }
                var obj = listItems[i];
                if (obj.IsRenderizableInPage()) {
                    var done = obj.RenderedItemInPage.Render(position === i || obj.RenderedItemInPage.Visible);
                    if (i === position) {
                        promise = done || $.when();
                    }
                }
            }
            return promise;
        };

        _this.loadItem = function () {

        };

        _this.clickOnItem = function (obj) {
            //FXStreet.Util.killAllAjaxs();
            _this.highlightItem(obj.RenderedItemInPage.PositionInRenderizableListItems);

            obj.RenderedItemInPage.setRenderByUser(true);
            obj.RenderedItemInPage.resetBody();
            obj.onClick();
            _this.setCurrent(obj.RenderedItemInPage.PositionInRenderizableListItems).done(FXStreet.Util.fillPageSpace).done(function () {
                obj.RenderedItemInPage.InfiniteScrollPageObj.setAvoidNextScroll(false);
            });
        };

        _this.moveItemListToTop = function (item) {
            var element = item.Container;
            if (!element) {
                return;
            }

            var topOffset = element.offset().top;
            var containerOffSet = _this.ListItemsContainer.offset().top;
            var margin = 30;
            _this.InfiniteScroll.animateToPosition(topOffset - containerOffSet - margin);
        };

        _this.highlightItem = function(position) {
            var item = _this.getItemByPosition(position);

            _this.removeHighlightItem();

            if (item.Container !== undefined && item.Container !== null) {
                item.Container.addClass(_this.HighlightCssClass);
            }
        };

        _this.getItemByPosition = function (position) {
            var listItems = FXStreet.Class.Sidebar.Util.RenderizableListItems;
            if (position > listItems.length) {
                console.error("Invalid position");
            }

            return listItems[position];
        };

        _this.removeHighlightItem = function () {
            _this.ListItemsContainer.children('li').removeClass(_this.HighlightCssClass);
        };

        _this.clearListValues = function () {
            _this.ListValues = [];
            FXStreet.Class.Sidebar.Util.RenderizableListItems = [];
        };

        _this.SetNumberResult = function () {
            if (_this.CurrentQueryStringValues.length == 0) {
                return;
            }

            var url = _this.createUrl('PostNumberGetSidebarByIds', _this.CurrentQueryStringValues, 1);

            return $.getJSON(url, function (data) {
                $('.fxs_queryResults').addClass("fxs_selectedQuery");
                $('.fxs_queryResults_label > span').text(data);
            });
        };

        _this.HideNumberResult = function () {
            $('.fxs_queryResults').removeClass("fxs_selectedQuery");
        };

        return _this;
    };
    FXStreet.Class.Sidebar.ListItemType = {};
    FXStreet.Class.Sidebar.ListItemType.Base = function () {
        var parent = FXStreet.Class.Base(),
        _this = FXStreet.Util.extendObject(parent);

        _this.HtmlTemplateFile = "";
        _this.HtmlTemplateData = {};
        _this.RenderedItemInPage = null;
        _this.ClickCallback = null;
        _this.Container = null;
        _this.Id = "";

        _this.init = function (json) {
            _this.setSettingsByObject(json);

            if (json !== undefined && json !== null) {
                _this.HtmlTemplateData = json;
            }

            _this.setVars();
            _this.addEvents();
        };

        _this.setVars = function () {
            _this.HtmlTemplateData = _this.HtmlTemplateData || {};
        };
        _this.addEvents = function () {
        };

        _this.renderHtml = function (renderCallback) {
            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateFile).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, _this.HtmlTemplateData);
                _this.Container = $(rendered);
                _this.preRender();
                renderCallback(_this, _this.Container);
            });
        };

        _this.preRender = function () {
        };

        _this.click = function () {
            _this.ClickCallback(_this);
        };

        _this.onClick = function() {};

        _this.IsRenderizableInPage = function () {
            return _this.RenderedItemInPage !== null;
        };

        return _this;
    };
    FXStreet.Class.Sidebar.ListItemType.PieceOfNews = function () {
        var parent = FXStreet.Class.Sidebar.ListItemType.Base(),
          _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
            _this.setVars();
        };

        _this.setVars = function () {
            parent.setVars();
            parent.HtmlTemplateFile = "sidebar_list_pieceofnews.html";
            parent.RenderedItemInPage = new FXStreet.Class.Sidebar.RenderedItemInPage.PieceOfNews();
            parent.RenderedItemInPage.init(_this.HtmlTemplateData);
        };

        parent.onClick = function() {
            FXStreet.Util.updateNewsUrl(_this.HtmlTemplateData.Url, _this.HtmlTemplateData.Title);
        };

        return _this;
    };
    FXStreet.Class.Sidebar.ListItemType.AdvertiseSidebarNormal = function () {
        var parent = FXStreet.Class.Sidebar.ListItemType.Base(),
          _this = FXStreet.Util.extendObject(parent);

        _this.AdvertiseNormalObj = null;

        _this.init = function (json) {
            parent.init(json);
            _this.HtmlTemplateData.ContainerId = _this.Id;
        };

        parent.renderHtml = function (renderCallback) {
            var htmlElement = $("<div>").append($("<li class='fxs_listView_adContiner'>").attr("id", _this.HtmlTemplateData.ContainerId));
            htmlElement.addClass('fxs_listView_adContiner');
            renderCallback(_this, htmlElement.html());
            _this.AdvertiseNormalObj = new FXStreet.Class.AdvertiseNormal();
            _this.AdvertiseNormalObj.init(_this.HtmlTemplateData);
            return $().promise();
        };

        return _this;
    };
    FXStreet.Class.Sidebar.ListItemType.AjaxPage = function () {
        var parent = FXStreet.Class.Sidebar.ListItemType.Base(),
          _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
            _this.setVars();
        };
        _this.setVars = function () {
            parent.setVars();
            parent.RenderedItemInPage = new FXStreet.Class.Sidebar.RenderedItemInPage.AjaxPage();
            parent.RenderedItemInPage.init(_this.HtmlTemplateData);
        };

        parent.renderHtml = function () { };

        return _this;
    };
    FXStreet.Class.Sidebar.ListItemType.HomeNewsPage = function () {
        var parent = FXStreet.Class.Sidebar.ListItemType.AjaxPage(),
          _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
            _this.setVars();
        };
        _this.setVars = function () {
            parent.setVars();
            parent.RenderedItemInPage = new FXStreet.Class.Sidebar.RenderedItemInPage.HomeNewsPage();
            parent.RenderedItemInPage.init(_this.HtmlTemplateData);
        };

        return _this;
    };
    FXStreet.Class.Sidebar.ListItemType.AdvertisePageItemNormal = function () {
        var parent = FXStreet.Class.Sidebar.ListItemType.Base(),
         _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
            _this.setVars();
        };

        _this.setVars = function () {
            _this.HtmlTemplateData.ContainerId = _this.Id;
            parent.RenderedItemInPage = new FXStreet.Class.Sidebar.RenderedItemInPage.AdvertisePageItemNormal();
            parent.RenderedItemInPage.init(_this.HtmlTemplateData);
        };

        parent.renderHtml = function () { };

        return _this;
    }
    FXStreet.Class.Sidebar.ListItemType.SponsoredContentSidebar = function () {
        var parent = FXStreet.Class.Sidebar.ListItemType.Base(),
         _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
            _this.setVars();
        };

        _this.setVars = function () {
            _this.HtmlTemplateData.ContainerId = _this.Id;
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.Id);
        };

        parent.renderHtml = function (renderCallback) {
            _this.Container.html(_this.HtmlTemplateData.Html);
            //    var htmlElement = $("<div>").append($("<li class='fxs_listView_adContiner'>").attr("id", _this.HtmlTemplateData.ContainerId));
            //    htmlElement.addClass('fxs_listView_adContiner');
            //    renderCallback(_this, htmlElement.html());           
            //    return $().promise();
        };

        return _this;
    };
    FXStreet.Class.Sidebar.ListItemType.SponsoredPageItem = function () {
        var parent = FXStreet.Class.Sidebar.ListItemType.Base(),
         _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
            _this.setVars();
        };

        _this.setVars = function () {
            _this.HtmlTemplateData.ContainerId = _this.Id;
            parent.RenderedItemInPage = new FXStreet.Class.Sidebar.RenderedItemInPage.SponsoredPageItem();
            parent.RenderedItemInPage.init(_this.HtmlTemplateData);
        };

        parent.renderHtml = function () { };

        return _this;
    };

    FXStreet.Class.Sidebar.Typeahead = function () {
        var parent = FXStreet.Class.Base(),
          _this = FXStreet.Util.extendObject(parent);

        // Json properties
        _this.Id = '';
        _this.ValuesOptions = {};
        _this.FindBy_Options = [];
        _this.TypeaheadFilterButtonId = "";
        _this.TypeaheadCancelButtonId = "";
        _this.ChangeTypeaheadDelegated = null;
        _this.FilterDelegated = null;
        _this.CloseDelegated = null;
        _this.InitialId = null;
        // End json properties

        _this.CurrentSelectedItem = null;
        _this.Suggestions = null;
        _this.OptionSelectedDelegate = null;
        _this.TypeaheadFilterButton = null;
        _this.TypeaheadCancelButton = null;
        _this.typeaheadInput = $("#q");

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.addEvents();
            _this.loadValuesOptions();
        };

        _this.setVars = function () {
            _this.TypeaheadFilterButton = FXStreet.Util.getjQueryObjectById(_this.TypeaheadFilterButtonId);
            _this.TypeaheadCancelButton = FXStreet.Util.getjQueryObjectById(_this.TypeaheadCancelButtonId);
        };

        _this.addEvents = function () {
            _this.TypeaheadFilterButton.on('click', _this.TypeaheadFilterButtonClick);
            _this.TypeaheadCancelButton.on('click', _this.TypeaheadCancelButtonClick);
            _this.typeaheadInput.on('blur', _this.TypeaheadBlur);
        };

        _this.TypeaheadFilterButtonClick = function (e) {
            $('.fxs_filter').addClass("active");
            if (e) {
                e.stopPropagation();
            }
            _this.FilterDelegated();
        };

        _this.TypeaheadCancelButtonClick = function (e) {
            $('.fxs_filter').removeClass("active");
            $('.fxs_typeaheadContainer').removeClass("result");
            $('.fxs_typeaheadContainer').removeClass("hint");
            $('.fxs_typeaheadContainer').removeClass("backdrop");
            $('.fxs_queryResults').removeClass("fxs_selectedQuery");
            _this.CurrentSelectedItem = null;
            _this.CloseDelegated();
            if (e) {
                e.stopPropagation();
            }
        };

        _this.loadValuesOptions = function () {
            for (var i = 0; i < _this.FindBy_Options.length; i++) {
                var option = _this.FindBy_Options[i];
                var actionUrl = FXStreet.Util.createUrl(FXStreet.Resource.FxsApiRoutes[option.FindBy_FxsApiRoute], []);
                if (actionUrl !== undefined && actionUrl !== null) {
                    $.getJSON(actionUrl, function (data) {
                        _this.ValuesOptions[option.QueryStringKey] = data;
                        _this.ValuesOptions[option.QueryStringKey].Template = option.Template;
                        _this.createTypeahead();
                    });
                }
            }
        };

        _this.setSuggestions = function (jsonData) {
            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateName).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
                _this.Suggestions.append(rendered);
                _this.Suggestions.find('.fxs-it-suggestion').on('click', function () {
                    var self = $(this);
                    var selected = {
                        Id: self.attr('value'),
                        Name: self.attr('name'),
                        Option: self.attr('fxs-option-urlapi')
                    };
                    _this.SuggestionClick(selected);
                });
            });
        };

        _this.createTypeahead = function () {
            var data = {};
            $.each(_this.ValuesOptions, function (key, element) {
                data[key] = {
                    data: $.map(element, function (val) { return { id: val.Id, display: val.Title }; }), // Get only the array, without properties
                    template: element.Template
                };
            });

            _this.CurrentSelectedItem = _this.ValuesOptions.Categories.findFirst(function (item) {
                return item.Id.toLowerCase() === _this.InitialId.toLowerCase();
            });

            _this.typeaheadInput.typeahead({
                minLength: 1,
                order: "asc",
                group: true,
                groupMaxItem: 6,
                hint: true,
                dropdownFilter: false,
                emptyTemplate: 'No result for "{{query}}"',
                source: data,
                debug: false,
                callback: {
                    onInit: null,
                    onReady: function () {
                        if (_this.CurrentSelectedItem) {
                            _this.typeaheadInput.val(_this.CurrentSelectedItem.Title);
                            _this.TypeaheadFilterButtonClick();
                        }
                    },      // -> New callback, when the Typeahead initial preparation is completed
                    onSearch: null,     // -> New callback, when data is being fetched & analyzed to give search results
                    onResult: null,
                    onLayoutBuiltBefore: null,  // -> New callback, when the result HTML is build, modify it before it get showed
                    onLayoutBuiltAfter: null,   // -> New callback, modify the dom right after the results gets inserted in the result container
                    onNavigate: null,   // -> New callback, when a key is pressed to navigate the results
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onClick: _this.onSuggestionClick,
                    onClickBefore: null,// -> Improved feature, possibility to e.preventDefault() to prevent the Typeahead behaviors
                    onClickAfter: null, // -> New feature, happens after the default clicked behaviors has been executed
                    onSubmit: null
                },
            });
        };

        _this.getValue = function () {
            return _this.typeaheadInput.val();
        };

        _this.onSuggestionClick = function (input, value, selectedItem) {
            if (_this.CurrentSelectedItem === selectedItem) {
                return;
            }

            _this.CurrentSelectedItem = selectedItem;
            _this.ChangeTypeaheadDelegated(_this.CurrentSelectedItem);
        };

        _this.TypeaheadBlur = function () {
            var value = _this.getValue().toLowerCase();
            var selected = null;
            $.each(_this.ValuesOptions, function (key, element) {
                selected = $.findFirst(_this.ValuesOptions[key], function (item) {
                    return item.Title.toLowerCase() === value;
                });
                if (selected) {
                    return false;
                }
            });

            if (selected && _this.CurrentSelectedItem == selected) {
                return;
            }
            if (selected) {
                var options = $('.fxs_typeaheadList .fxs_typeaheadTxt').filter(function () {
                    return this.innerText.toLowerCase() === value;
                });
                options[0].click();
                //_this.typeaheadInput.val(selected.Title);
            } else if (_this.CurrentSelectedItem) {
                _this.typeaheadInput.val(_this.CurrentSelectedItem.Title);
            } else {
                _this.typeaheadInput.val('');
            }
        };

        _this.getSelectedItem = function (itemId, itemGroup) {
            var option = $.findFirst(_this.FindBy_Options, function (item) {
                return item.QueryStringKey === itemGroup;
            });
            if (!option) {
                return null;
            }
            var type = option.QueryStringKey;
            return $.findFirst(_this.ValuesOptions[type], function (item) {
                return item.Id === itemId;
            });
        };

        return _this;
    };
    FXStreet.Class.Sidebar.RenderedItemInPage = {};
    FXStreet.Class.Sidebar.RenderedItemInPage.Base = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        _this.ContainerBodyId = 'fxs_it_detail';
        _this.LoadingLock = false;
        _this.Loaded = false; // Tenemos el elemento en Memory
        _this.Rendered = false; // El elemento esta en DOM
        _this.Visible = false; // El elemento esta en el DOM & esta visible
        _this.PositionInRenderizableListItems = -1;
        _this.ContainerBody = null;
        _this.ContainerItem = null;
        _this.InfiniteScrollPageObj = null;
        _this.IsRenderByUser = false;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
        };

        _this.setVars = function () {
            _this.ContainerBody = FXStreet.Util.getjQueryObjectById(_this.ContainerBodyId);
            _this.InfiniteScrollPageObj = FXStreet.Util.getObjectInstance("InfiniteScrollPage");
        };

        _this.CreateContainer = function () {
            _this.ContainerItem = $("<section>");
            _this.ContainerItem.css('display', 'none');
            _this.ContainerItem.addClass('fxs_detail');
            //_this.ContainerBody.append(_this.ContainerItem);
        };

        _this.Render = function (show) {
            if (_this.LoadingLock) {
                return $.when();
            }

            if (!_this.Loaded) {
                return _this.load(show);
            } else {
                if (!_this.IsRenderByUser) {
                    return _this.renderByScroll(show);
                }
                else {
                    return _this.renderByUser();
                }
            }
        };

        _this.load = function (show) {
            _this.LoadingLock = true;
            return _this.renderPromise().done(function () {
                if (!_this.IsRenderByUser) {
                    _this.renderByScroll(show);
                }
                _this.LoadingLock = false;
                _this.Loaded = true;
            });
        };

        _this.appendContainer = function () {
            _this.appendContainerPrivate();
        };

        _this.appendContainerPrivate = function () {
            var sections = _this.ContainerBody.find('section');
            var result = null;
            sections.sort(function (a, b) {
                return $(a).attr('fxs_it_position') - $(b).attr('fxs_it_position');
            });
            sections.each(function (i, item) {
                if ($(item).attr('fxs_it_position') > _this.PositionInRenderizableListItems) {
                    result = item;
                    return false;
                }
            });

            if (result) {
                _this.ContainerItem.insertBefore(result);
            } else {
                _this.ContainerBody.append(_this.ContainerItem);
            }
        };

        _this.positionateScrollWhenGoUp = function () {
            var height = _this.ContainerItem.outerHeight();
            var containerOffSet = _this.ContainerBody.offset().top;
            var position = height - containerOffSet;
            if (position < 1) {
                position = 1;
            }
            _this.InfiniteScrollPageObj.moveToPosition(position);
        };

        _this.moveScrollAtTop = function () {
            _this.InfiniteScrollPageObj.moveToPosition(1);
        };

        _this.renderByScroll = function (show) {
            if (!_this.Rendered) {
                _this.ContainerItem.hide();
                _this.appendContainer();
                _this.Rendered = true;

            }
            if (show && !_this.Visible) {
                _this.ContainerItem.show({
                    duration: 0, done: function () {
                        if (_this.InfiniteScrollPageObj.MoveUpDirection) {
                            _this.positionateScrollWhenGoUp();
                        }
                        _this.onShow();
                    }
                });

            } else if (!show && _this.Visible) {
                _this.ContainerItem.hide();
            }
            _this.Visible = show;
        };

        _this.onShow = function () {
        };

        _this.renderByUser = function () {
            _this.appendContainer();
            _this.ContainerItem.show({
                duration: 0,
                done: function () {
                    _this.onShow();
                }
            });
            _this.Rendered = true;
            _this.Visible = true;
            _this.IsRenderByUser = false;
            _this.moveScrollAtTop();
        };

        _this.resetBody = function () {
            FXStreet.Class.Sidebar.Util.RenderizableListItems.forEach(function (item) {
                item.RenderedItemInPage.setRendered(false);
                item.RenderedItemInPage.setVisible(false);
            });
            _this.ContainerBody.html('');
            _this.moveScrollAtTop();
        };

        _this.ContainerItemChanged = function () {
            if (_this.IsRenderByUser) {
                _this.renderByUser();
            }
        };

        _this.renderPromise = function () {
        };

        // Necesitamos estas funciones ya que sinó al asignar des de un hijo, el set settea en el hijo, ignorando el padre
        _this.setPositionInRenderizableListItems = function (position) {
            _this.PositionInRenderizableListItems = position;
            _this.ContainerItem.attr('fxs_it_position', position);
        };

        _this.setRenderByUser = function (value) {
            _this.IsRenderByUser = value;
            _this.InfiniteScrollPageObj.setAvoidNextScroll(true);
        };

        _this.setVisible = function (value) {
            _this.Visible = value;
        };

        _this.setContainerItem = function (value) {
            _this.ContainerItem = value;
        };

        _this.setAsVisible = function () {
            _this.Loaded = true;
            _this.Rendered = true;
            _this.Visible = true;
        };

        _this.setRendered = function (value) {
            _this.Rendered = value;
        };

        _this.IsVisible = function () {
            return _this.Visible;
        };

        _this.IncreasePosition = function (increase) {
            _this.PositionInRenderizableListItems += increase;
            _this.ContainerItem.attr('fxs_it_position', _this.PositionInRenderizableListItems);
        };

        return _this;
    };
    FXStreet.Class.Sidebar.RenderedItemInPage.PieceOfNews = function () {
        var parent = FXStreet.Class.Sidebar.RenderedItemInPage.Base(),
         _this = FXStreet.Util.extendObject(parent);

        _this.Id = ""; //PostId
        _this.PieceOfNewsDetailsObj = null;

        _this.init = function (json) {
            parent.init(json);
            _this.setSettingsByObject(json);
            _this.CreateContainer();
        };

        _this.CreateContainer = function () {
            parent.CreateContainer();

            _this.PieceOfNewsDetailsObj = new FXStreet.Class.PieceOfNewsDetails();
            _this.PieceOfNewsDetailsObj.init({
                Container: _this.ContainerItem,
                ContainerChangedDelegate: _this.ContainerItemChanged,
                PieceOfNewsId: _this.Id
            });
        };

        parent.renderPromise = function () {
            return _this.PieceOfNewsDetailsObj.renderPromise();
        };

        parent.onShow = function () {
            _this.PieceOfNewsDetailsObj.loadAjaxs();
        };

        //TODO: @ANR, mirar como hacer estos overrides mas elegantes
        parent.appendContainer = function () {
            _this.appendContainerPrivate();
            _this.PieceOfNewsDetailsObj.LoadAjaxWidgets();
        };

        return _this;
    };
    FXStreet.Class.Sidebar.RenderedItemInPage.AjaxPage = function () {
        var parent = FXStreet.Class.Sidebar.RenderedItemInPage.Base(),
         _this = FXStreet.Util.extendObject(parent);

        _this.AjaxPageObj = null;
        _this.PageUrl = "";

        _this.init = function (json) {
            parent.init(json);
            _this.setSettingsByObject(json);
            _this.CreateContainer();
        };

        _this.CreateContainer = function () {
            parent.CreateContainer();

            _this.AjaxPageObj = new FXStreet.Class.AjaxPage();
            _this.AjaxPageObj.init({
                Container: _this.ContainerItem,
                PageUrl: _this.PageUrl,
            });

            _this.onPageCreated();
        };

        _this.onPageCreated = function() {};

        parent.renderPromise = function () {
            return _this.AjaxPageObj.renderPromise();
        };

        parent.onShow = function () {
            _this.AjaxPageObj.loadAjaxs();
            _this.onAjaxShow();
        };

        _this.onAjaxShow = function () { };

        return _this;
    };
    FXStreet.Class.Sidebar.RenderedItemInPage.HomeNewsPage = function () {
        var parent = FXStreet.Class.Sidebar.RenderedItemInPage.AjaxPage(),
         _this = FXStreet.Util.extendObject(parent);

        _this.init = function (json) {
            parent.init(json);
            _this.setSettingsByObject(json);
            _this.setVars();
        };

        _this.setVars = function () {
            parent.PageUrl = FXStreet.Resource.PageUrl;
        };

        parent.onPageCreated = function () {
            _this.ContainerItem.attr('id', 'fxs_home');
        };

        parent.onAjaxShow = function () {
            FXStreet.Util.setHomeCookie();
        };

        return _this;
    };
    FXStreet.Class.Sidebar.RenderedItemInPage.AdvertisePageItemNormal = function () {
        var parent = FXStreet.Class.Sidebar.RenderedItemInPage.Base(),
        _this = FXStreet.Util.extendObject(parent);

        _this.Id = "";
        _this.HtmlTemplateData = "";

        _this.AdvertiseNormalObj = null;

        _this.init = function (json) {
            parent.init(json);
            _this.setSettingsByObject(json);
            _this.setVars(json);

            _this.CreateContainer();
        };

        _this.setVars = function (json) {
            //_this.HtmlTemplateData.ContainerId = _this.Id;
            //_this.Container = FXStreet.Util.getjQueryObjectById(_this.Id);
            _this.HtmlTemplateData = json;
            _this.HtmlTemplateData.ContainerId = "page_" + _this.HtmlTemplateData.ContainerId;
        };

        _this.CreateContainer = function () {
            parent.CreateContainer();
            parent.ContainerItem.attr("id", _this.HtmlTemplateData.ContainerId);
            // TODO: ANR to design -> we need a class for these advertises
            parent.ContainerItem.css('padding', 0);
            parent.ContainerItem.css('text-align', 'center');
            parent.ContainerItem.css('background', 'none');

        };

        parent.renderPromise = function () {
            _this.appendContainer();
            _this.AdvertiseNormalObj = new FXStreet.Class.AdvertiseNormal();
            return $.when();
        };

        parent.onShow = function () {
            _this.AdvertiseNormalObj.init(_this.HtmlTemplateData);
        };

        return _this;

    };
    FXStreet.Class.Sidebar.RenderedItemInPage.SponsoredPageItem = function () {

        var parent = FXStreet.Class.Sidebar.RenderedItemInPage.Base(),
        _this = FXStreet.Util.extendObject(parent);

        _this.Id = "";
        _this.Html = "";

        _this.init = function (json) {
            parent.init(json);
            _this.setSettingsByObject(json);
            _this.CreateContainer();
            _this.setVars(json);
        };

        _this.setVars = function (json) {
            //_this.HtmlTemplateData.ContainerId = _this.Id;
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.Id);
            _this.Html = json.Html;
        };

        _this.CreateContainer = function () {
            parent.CreateContainer();
            parent.ContainerItem.removeClass("fxs_detail");
        };

        parent.renderPromise = function () {
            _this.ContainerItem.html(_this.Html);
            return $.when();
        };

        return _this;
    };

    FXStreet.Util.KillableAjaxs = [];
    FXStreet.Util.callKillableAjax = function (ajax) {
        ajax.auxId = FXStreet.Util.guid();
        FXStreet.Util.KillableAjaxs.push(ajax);
        return ajax;// TODO: .then(function () { FXStreet.Util.removeKillableAjax(ajax.auxId); });
    };
    FXStreet.Util.removeKillableAjax = function (ajaxId) {
        FXStreet.Util.KillableAjaxs.removeFirst(function (item) { return item.auxId === ajaxId; });
    };
    FXStreet.Util.killAllAjaxs = function () {
        FXStreet.Util.KillableAjaxs.forEach(function (item) {
            item.abort();
        });
        FXStreet.Util.KillableAjaxs = [];
    };

    FXStreet.Class.PieceOfNewsDetails = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        _this.Container = null;
        _this.ContainerChangedDelegate = null;
        _this.PieceOfNewsId = "";
        _this.HtmlTemplateFile = "pieceofnewsdetails_default.html";
        //_this.SeoTemplateFile = "pieceofnewsdetails_seo.html";
        _this.JsonAds = {};
        _this.JsonRelatedPosts = {};
        _this.Url = FXStreet.Resource.FxsApiRoutes["PostDetailById"];

        _this.ajaxAlreadyLoaded = false;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
        };

        _this.setVars = function () {
            // TODO: (ANR) Estos datos tienen que estar hardcodeados? En la template de mustache pieceofnewsdetails_ajax.html estan repetidos. ¿Encapsular?
            _this.JsonAds = {
                "ContainerId": "fxs_article_ad_" + _this.PieceOfNewsId,
                "SlotName": "/7138/fxstreettest/test",
                "AdvertiseType": "normal",
                "RefreshSeconds": 0,
                "MobileSize": "[300, 250]",
                "TabletSize": "[300, 250]",
                "DesktopSize": "[300, 250]",
                "FadeInMilis": 500,
                "FadeOutMilis": 1000,
                "StartFadeOutMilis": 5000
            };
            _this.JsonRelatedPosts = {
                "ContainerId": "fxs_article_related_" + _this.PieceOfNewsId,
                "PostId": _this.PieceOfNewsId,
                "Take": 3,
                "CultureName": FXStreet.Resource.CultureName
            };
            _this.JsonSocialMediaBar = {
                "ContainerId": "fxs_socialmedia_bar_" + _this.PieceOfNewsId
            };
        };

        _this.renderPromise = function () {
            var data = {
                "PostId": _this.PieceOfNewsId,
                "CultureName": FXStreet.Resource.CultureName
            };

            return FXStreet.Util.callKillableAjax($.ajax({
                type: "GET",
                url: _this.Url,
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            })).then(_this.searchSuccess);
        };

        _this.searchSuccess = function (jsonData) {
            //_this.renderSeoJson(jsonData);
            return _this.renderHtml(jsonData);
        };

        _this.renderHtml = function (jsonData) {
            return FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateFile).done(function (template) {
                jsonData.NewsUrl = FXStreet.Resource.PageUrl;
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
                _this.Container.append(rendered);
                _this.Container.addClass('fxs_page_news');

                if (_this.ContainerChangedDelegate !== null)
                    _this.ContainerChangedDelegate();

            });
        };

        _this.LoadAjaxWidgets = function () {
            if (!_this.ajaxAlreadyLoaded) {
                var relatedPosts = new FXStreet.Class.RelatedPostsByCategories();
                relatedPosts.init(_this.JsonRelatedPosts);

                var socialMediaBar = new FXStreet.Class.SocialMediaBar();
                socialMediaBar.init(_this.JsonSocialMediaBar);

                _this.ajaxAlreadyLoaded = true;
            }
        };

        //_this.renderSeoJson = function (jsonData) {
        //    return FXStreet.Util.loadHtmlTemplate(_this.SeoTemplateFile).done(function (template) {
        //        var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
        //        _this.Container.append(rendered);
        //        if (_this.ContainerChangedDelegate !== null)
        //            _this.ContainerChangedDelegate();
        //    });
        //};

        _this.loadAjaxs = function () {
            var ads = new FXStreet.Class.AdvertiseNormal();
            ads.init(_this.JsonAds);
        };

        return _this;
    };

    FXStreet.Class.RelatedPostsByCategories = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        // ----- begin json properties -----

        _this.ContainerId = "";
        _this.Take = 0;
        _this.PostId = "";

        // ----- end json properties -----
        _this.Container = null;
        _this.HtmlTemplateFile = "relatedpostsbycategories_default.html";
        _this.Take = 0;
        _this.Url = FXStreet.Resource.FxsApiRoutes["PostGetRelated"];

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.callRelatedPostsApi();
        };

        _this.setVars = function () {
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.ContainerId);
        };

        _this.callRelatedPostsApi = function () {
            var data = {
                "PostId": _this.PostId,
                "Take": _this.Take,
                "CultureName": FXStreet.Resource.CultureName
            };

            $.ajax({
                type: "GET",
                url: _this.Url,
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).done(_this.searchSuccess);
        };

        _this.searchSuccess = function (relatedPosts) {
            if (relatedPosts.length <= 0) {
                _this.hideRelatedContent();
                return;
            }

            var jsonData = {
                "RelatedPosts": relatedPosts
            };

            _this.renderHtml(jsonData);
        };

        _this.renderHtml = function (jsonData) {
            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateFile).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
                _this.Container.append(rendered);
            });
        };

        _this.hideRelatedContent = function () {
            var footer = $("article[fxs-it-id='" + _this.PostId + "']").find("footer").first();
            if (footer) {
                footer.hide();
            }
        };

        return _this;
    };

    FXStreet.Class.SocialMediaBar = function () {
        var parent = FXStreet.Class.Base(),
            _this = FXStreet.Util.extendObject(parent);

        // ----- begin json properties -----
        _this.ContainerId = "";
        // ----- end json properties -----
        _this.Container = null;
        _this.HtmlTemplateFile = "socialmediabar_default.html";
        _this.Url = FXStreet.Resource.FxsApiRoutes["GetSocialMediaBar"];

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.callSocialMediaApi();
        };

        _this.setVars = function () {
            _this.Container = FXStreet.Util.getjQueryObjectById(_this.ContainerId);
        };

        _this.callSocialMediaApi = function () {
            $.ajax({
                type: "GET",
                url: _this.Url
            }).done(_this.searchSuccess);
        };

        var setCssClasses = function (socialMediaChannels) {
            for (var i = 0; i < socialMediaChannels.length; i++) {
                if (socialMediaChannels[i].Name.toLowerCase().indexOf("facebook") > -1) {
                    socialMediaChannels[i].CssClass = "fa fa-facebook";
                } else if (socialMediaChannels[i].Name.toLowerCase().indexOf("twitter") > -1) {
                    socialMediaChannels[i].CssClass = "fa fa-twitter";
                } else if (socialMediaChannels[i].Name.toLowerCase().indexOf("google") > -1) {
                    socialMediaChannels[i].CssClass = "fa fa-google";
                } else if (socialMediaChannels[i].Name.toLowerCase().indexOf("linkedin") > -1) {
                    socialMediaChannels[i].CssClass = "fa fa-linkedin";
                }
            }
        };

        _this.searchSuccess = function (socialMediaResponse) {
            var socialMediaChannels = socialMediaResponse.SocialMediaChannels;
            setCssClasses(socialMediaChannels);
            // Split the list, put the first two elements into one list, and the rest into other
            var socialMediaChannelsShowed = socialMediaChannels.slice(0, 2);
            var socialMediaChannelsHidden = socialMediaChannels.slice(2, socialMediaChannels.length);
            var jsonData = {
                "SocialMediaChannelsShowed": socialMediaChannelsShowed,
                "SocialMediaChannelsHidden": socialMediaChannelsHidden,
                "ShareDisplay": socialMediaResponse.ShareDisplay,
                "MoreOptionsDisplay": socialMediaResponse.MoreOptionsDisplay
            };
            FXStreet.Util.loadHtmlTemplate(_this.HtmlTemplateFile).done(function (template) {
                var rendered = FXStreet.Util.renderByHtmlTemplate(template, jsonData);
                _this.Container.html(rendered);
                _this.loadHtmlTemplateSuccessComplete();
            });
        };

        _this.loadHtmlTemplateSuccessComplete = function () {
            // TODO
            $('.fxs_overflowOptions').on("click", function () {
                $(this).toggleClass("active");
            });
            $('.fxs_btn_dd').on('click', function (evt) {
                $('.fxs_btn_group').toggleClass("active");
                evt.stopPropagation();
            });
        };

        return _this;
    };

    FXStreet.Class.PostNotifications = function () {
        var parent = FXStreet.Class.Base(),
           _this = FXStreet.Util.extendObject(parent);

        _this.ReconnectionTime = 5000;


        _this.PostCreated_ObserverSubject = null;
        _this.PostHub = null;

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
            _this.configurePostHub();
            _this.startConnection();
        };

        _this.setVars = function () {
            _this.PostHub = $.connection.postHub;
            _this.PostCreated_ObserverSubject = new FXStreet.Class.Patterns.Observer.Subject();
        };

        _this.configurePostHub = function () {
            _this.PostHub.client.postCreated = function (postId, categoriesIds, cultureName) {
                if (FXStreet.Resource.CultureName !== cultureName) {
                    return;
                }

                var post = {
                    "postId": postId,
                    "categoriesIds": categoriesIds
                };

                _this.PostCreated_ObserverSubject.notify(post);
            };
        };

        _this.whenPostCreated = function (functionDelegate) {
            if (functionDelegate !== undefined && functionDelegate !== null) {
                var json = {
                    'UpdateDelegate': functionDelegate
                };
                var observer = new FXStreet.Class.Patterns.Observer.Observer();
                observer.init(json);
                _this.PostCreated_ObserverSubject.addObserver(observer);
            }
        };

        _this.startConnection = function () {
            $.connection.hub.start().done(function () {
                console.log("connection stablish");
            }).fail(function (err) {
                console.log(err);
            });

            $.connection.hub.disconnected(function () {
                setTimeout(function () {
                    $.connection.hub.start();
                }, _this.ReconnectionTime);
            });
        };

        return _this;
    };

    FXStreet.Class.AjaxPage = function () {
        var parent = FXStreet.Class.Base(),
           _this = FXStreet.Util.extendObject(parent);

        // Json properties
        _this.Container = null;
        _this.PageUrl = '';
        // End json properties

        _this.init = function (json) {
            _this.setSettingsByObject(json);
            _this.setVars();
        };

        _this.setVars = function () {
            _this.RenderedItemInPage = new FXStreet.Class.Sidebar.RenderedItemInPage.Base();
        };

        _this.renderPromise = function () {
            var url = window.location.protocol + '//' + window.location.host + _this.PageUrl;
            return $.ajax({
                url: url,
                success: _this.renderSuccess
            });
        };

        _this.renderSuccess = function (data) {
            var html = _this.getHtmlBody(data);
            _this.Container.html(html);
        };

        _this.getHtmlBody = function (data) {
            var html = $(data).find('#fxs_home').html();
            return html;
        };

        _this.loadAjaxs = function () {
            FXStreet.Util.initObjects('all');
        };

        return _this;
    };


    /******************************
    ---- END REGION CLASS ----
    ********************************/

    (function ($) {
        $(function () {
            FXStreet.Util.ready();
            $(window).load(FXStreet.Util.load);
        });
    })(jQuery);
}());