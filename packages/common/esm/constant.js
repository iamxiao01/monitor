var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var ERRORTYPES;
(function (ERRORTYPES) {
    ERRORTYPES["UNKNOWN"] = "UNKNOWN";
    ERRORTYPES["UNKNOWN_FUNCTION"] = "UNKNOWN_FUNCTION";
    ERRORTYPES["JAVASCRIPT_ERROR"] = "JAVASCRIPT_ERROR";
    ERRORTYPES["LOG_ERROR"] = "LOG_ERROR";
    ERRORTYPES["FETCH_ERROR"] = "HTTP_ERROR";
    ERRORTYPES["VUE_ERROR"] = "VUE_ERROR";
    ERRORTYPES["REACT_ERROR"] = "REACT_ERROR";
    ERRORTYPES["RESOURCE_ERROR"] = "RESOURCE_ERROR";
    ERRORTYPES["PROMISE_ERROR"] = "PROMISE_ERROR";
    ERRORTYPES["ROUTE_ERROR"] = "ROUTE_ERROR";
})(ERRORTYPES || (ERRORTYPES = {}));
export var WxAppEvents;
(function (WxAppEvents) {
    WxAppEvents["AppOnLaunch"] = "AppOnLaunch";
    WxAppEvents["AppOnShow"] = "AppOnShow";
    WxAppEvents["AppOnHide"] = "AppOnHide";
    WxAppEvents["AppOnError"] = "AppOnError";
    WxAppEvents["AppOnPageNotFound"] = "AppOnPageNotFound";
    WxAppEvents["AppOnUnhandledRejection"] = "AppOnUnhandledRejection";
})(WxAppEvents || (WxAppEvents = {}));
export var WxPageEvents;
(function (WxPageEvents) {
    WxPageEvents["PageOnShow"] = "PageOnShow";
    WxPageEvents["PageOnHide"] = "PageOnHide";
    WxPageEvents["PageOnShareAppMessage"] = "PageOnShareAppMessage";
    WxPageEvents["PageOnShareTimeline"] = "PageOnShareTimeline";
    WxPageEvents["PageOnTabItemTap"] = "PageOnTabItemTap";
})(WxPageEvents || (WxPageEvents = {}));
export var WxRouteEvents;
(function (WxRouteEvents) {
    WxRouteEvents["SwitchTab"] = "switchTab";
    WxRouteEvents["ReLaunch"] = "reLaunch";
    WxRouteEvents["RedirectTo"] = "redirectTo";
    WxRouteEvents["NavigateTo"] = "navigateTo";
    WxRouteEvents["NavigateBack"] = "navigateBack";
    WxRouteEvents["RouteFail"] = "routeFail";
})(WxRouteEvents || (WxRouteEvents = {}));
export var CompositeEvents = __assign(__assign(__assign({}, WxAppEvents), WxPageEvents), ERRORTYPES);
export var BREADCRUMBTYPES;
(function (BREADCRUMBTYPES) {
    BREADCRUMBTYPES["ROUTE"] = "Route";
    BREADCRUMBTYPES["CLICK"] = "UI.Click";
    BREADCRUMBTYPES["CONSOLE"] = "Console";
    BREADCRUMBTYPES["XHR"] = "Xhr";
    BREADCRUMBTYPES["FETCH"] = "Fetch";
    BREADCRUMBTYPES["UNHANDLEDREJECTION"] = "Unhandledrejection";
    BREADCRUMBTYPES["VUE"] = "Vue";
    BREADCRUMBTYPES["REACT"] = "React";
    BREADCRUMBTYPES["RESOURCE"] = "Resource";
    BREADCRUMBTYPES["CODE_ERROR"] = "Code Error";
    BREADCRUMBTYPES["CUSTOMER"] = "Customer";
    BREADCRUMBTYPES["APP_ON_SHOW"] = "App On Show";
    BREADCRUMBTYPES["APP_ON_LAUNCH"] = "App On Launch";
    BREADCRUMBTYPES["APP_ON_HIDE"] = "App On Hide";
    BREADCRUMBTYPES["PAGE_ON_SHOW"] = "Page On Show";
    BREADCRUMBTYPES["PAGE_ON_HIDE"] = "Page On Hide";
    BREADCRUMBTYPES["PAGE_ON_SHARE_APP_MESSAGE"] = "Page On Share App Message";
    BREADCRUMBTYPES["PAGE_ON_SHARE_TIMELINE"] = "Page On Share Timeline";
    BREADCRUMBTYPES["PAGE_ON_TAB_ITEM_TAP"] = "Page On Tab Item Tap";
    BREADCRUMBTYPES["TAP"] = "UI.Tap";
    BREADCRUMBTYPES["TOUCHMOVE"] = "UI.Touchmove";
})(BREADCRUMBTYPES || (BREADCRUMBTYPES = {}));
export var BREADCRUMBCATEGORYS;
(function (BREADCRUMBCATEGORYS) {
    BREADCRUMBCATEGORYS["HTTP"] = "http";
    BREADCRUMBCATEGORYS["USER"] = "user";
    BREADCRUMBCATEGORYS["DEBUG"] = "debug";
    BREADCRUMBCATEGORYS["EXCEPTION"] = "exception";
    BREADCRUMBCATEGORYS["LIFECYCLE"] = "lifecycle";
})(BREADCRUMBCATEGORYS || (BREADCRUMBCATEGORYS = {}));
export var EVENTTYPES;
(function (EVENTTYPES) {
    EVENTTYPES["XHR"] = "xhr";
    EVENTTYPES["FETCH"] = "fetch";
    EVENTTYPES["CONSOLE"] = "console";
    EVENTTYPES["DOM"] = "dom";
    EVENTTYPES["HISTORY"] = "history";
    EVENTTYPES["ERROR"] = "error";
    EVENTTYPES["HASHCHANGE"] = "hashchange";
    EVENTTYPES["UNHANDLEDREJECTION"] = "unhandledrejection";
    EVENTTYPES["MITO"] = "mito";
    EVENTTYPES["VUE"] = "Vue";
    EVENTTYPES["MINI_ROUTE"] = "miniRoute";
})(EVENTTYPES || (EVENTTYPES = {}));
export var HTTPTYPE;
(function (HTTPTYPE) {
    HTTPTYPE["XHR"] = "xhr";
    HTTPTYPE["FETCH"] = "fetch";
})(HTTPTYPE || (HTTPTYPE = {}));
export var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_CODE[HTTP_CODE["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTP_CODE[HTTP_CODE["INTERNAL_EXCEPTION"] = 500] = "INTERNAL_EXCEPTION";
})(HTTP_CODE || (HTTP_CODE = {}));
export var ERROR_TYPE_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
var globalVar = {
    isLogAddBreadcrumb: true,
    crossOriginThreshold: 1000
};
export { globalVar };
//# sourceMappingURL=constant.js.map