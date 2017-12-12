if ((<any>global).TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");
    global.registerModule("nativescript-filter-select", () => require("nativescript-filter-select"));
    //register application modules
    global.registerModule("main-page", () => require("./main-page"));
}
