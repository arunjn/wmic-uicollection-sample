import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/wmic-uicollection-sample.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WmicUICollectionSampleService = /** @class */ (function () {
    function WmicUICollectionSampleService() {
    }
    WmicUICollectionSampleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WmicUICollectionSampleService.ctorParameters = function () { return []; };
    /** @nocollapse */ WmicUICollectionSampleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function WmicUICollectionSampleService_Factory() { return new WmicUICollectionSampleService(); }, token: WmicUICollectionSampleService, providedIn: "root" });
    return WmicUICollectionSampleService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/wmic-uicollection-sample.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WmicUICollectionSampleComponent = /** @class */ (function () {
    function WmicUICollectionSampleComponent() {
    }
    /**
     * @return {?}
     */
    WmicUICollectionSampleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    WmicUICollectionSampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-WmicUICollectionSample',
                    template: "\n    <p>\n      wmic-uicollection-sample works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    WmicUICollectionSampleComponent.ctorParameters = function () { return []; };
    return WmicUICollectionSampleComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dark-box/dark-box-a/dark-box-a.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DarkBoxAComponent = /** @class */ (function () {
    function DarkBoxAComponent() {
    }
    /**
     * @return {?}
     */
    DarkBoxAComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DarkBoxAComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wmic-dark-box-a',
                    template: "<p>dark-box-a works!</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DarkBoxAComponent.ctorParameters = function () { return []; };
    return DarkBoxAComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/wmic-uicollection-sample.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WmicUICollectionSampleModule = /** @class */ (function () {
    function WmicUICollectionSampleModule() {
    }
    WmicUICollectionSampleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [WmicUICollectionSampleComponent,
                        DarkBoxAComponent],
                    imports: [],
                    exports: [WmicUICollectionSampleComponent,
                        DarkBoxAComponent]
                },] }
    ];
    return WmicUICollectionSampleModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: wmic-uicollection-sample.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { WmicUICollectionSampleComponent, WmicUICollectionSampleModule, WmicUICollectionSampleService, DarkBoxAComponent as ɵa };
//# sourceMappingURL=wmic-uicollection-sample.js.map
