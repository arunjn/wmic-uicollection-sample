import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/wmic-uicollection-sample.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WmicUICollectionSampleService {
    constructor() { }
}
WmicUICollectionSampleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WmicUICollectionSampleService.ctorParameters = () => [];
/** @nocollapse */ WmicUICollectionSampleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function WmicUICollectionSampleService_Factory() { return new WmicUICollectionSampleService(); }, token: WmicUICollectionSampleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/wmic-uicollection-sample.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WmicUICollectionSampleComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
WmicUICollectionSampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-WmicUICollectionSample',
                template: `
    <p>
      wmic-uicollection-sample works!
    </p>
  `
            }] }
];
/** @nocollapse */
WmicUICollectionSampleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dark-box/dark-box-a/dark-box-a.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DarkBoxAComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DarkBoxAComponent.decorators = [
    { type: Component, args: [{
                selector: 'wmic-dark-box-a',
                template: "<p>dark-box-a works!</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DarkBoxAComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/wmic-uicollection-sample.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WmicUICollectionSampleModule {
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
