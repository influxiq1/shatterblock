(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('listing', ['exports', '@angular/core'], factory) :
    (factory((global.listing = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingService = /** @class */ (function () {
        function ListingService() {
        }
        ListingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ListingService.ctorParameters = function () { return []; };
        /** @nocollapse */ ListingService.ngInjectableDef = i0.defineInjectable({ factory: function ListingService_Factory() { return new ListingService(); }, token: ListingService, providedIn: "root" });
        return ListingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingComponent = /** @class */ (function () {
        function ListingComponent() {
        }
        /**
         * @return {?}
         */
        ListingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ListingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-listing',
                        template: "\n    <p>\n      listing works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ListingComponent.ctorParameters = function () { return []; };
        return ListingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingModule = /** @class */ (function () {
        function ListingModule() {
        }
        ListingModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ListingComponent],
                        imports: [],
                        exports: [ListingComponent]
                    },] }
        ];
        return ListingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ListingService = ListingService;
    exports.ListingComponent = ListingComponent;
    exports.ListingModule = ListingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=listing.umd.js.map