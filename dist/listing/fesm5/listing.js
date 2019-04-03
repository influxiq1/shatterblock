import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingService = /** @class */ (function () {
    function ListingService() {
    }
    ListingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ListingService.ctorParameters = function () { return []; };
    /** @nocollapse */ ListingService.ngInjectableDef = defineInjectable({ factory: function ListingService_Factory() { return new ListingService(); }, token: ListingService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { ListingService, ListingComponent, ListingModule };

//# sourceMappingURL=listing.js.map