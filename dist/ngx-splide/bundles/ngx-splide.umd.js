(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-splide', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-splide"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var _c0$1 = ["slideContent"];
    function NgxSplideSlideComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵprojection(0);
        }
    }
    var _c1 = ["*"];
    var NgxSplideSlideComponent = /** @class */ (function () {
        function NgxSplideSlideComponent() {
        }
        return NgxSplideSlideComponent;
    }());
    NgxSplideSlideComponent.ɵfac = function NgxSplideSlideComponent_Factory(t) { return new (t || NgxSplideSlideComponent)(); };
    NgxSplideSlideComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NgxSplideSlideComponent, selectors: [["splide-slide"]], viewQuery: function NgxSplideSlideComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.slideContent = _t.first);
            }
        }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["slideContent", ""]], template: function NgxSplideSlideComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵtemplate(0, NgxSplideSlideComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0__namespace.ɵɵtemplateRefExtractor);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxSplideSlideComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'splide-slide',
                        template: '<ng-template #slideContent><ng-content></ng-content></ng-template>'
                    }]
            }], null, { slideContent: [{
                    type: i0.ViewChild,
                    args: ['slideContent']
                }] });
    })();

    var _c0 = ["splideElement"];
    function NgxSplideComponent_div_4_1_ng_template_0_Template(rf, ctx) { }
    function NgxSplideComponent_div_4_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, NgxSplideComponent_div_4_1_ng_template_0_Template, 0, 0, "ng-template", 7);
        }
        if (rf & 2) {
            var slide_r2 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵproperty("ngTemplateOutlet", slide_r2.slideContent);
        }
    }
    function NgxSplideComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 5);
            i0__namespace.ɵɵtemplate(1, NgxSplideComponent_div_4_1_Template, 1, 1, undefined, 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var slide_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", slide_r2.slideContent);
        }
    }
    var NgxSplideComponent = /** @class */ (function () {
        function NgxSplideComponent(cdr, platformId) {
            this.cdr = cdr;
            this.platformId = platformId;
            this.selectedSlideIndexChange = new i0.EventEmitter();
            this.options = {};
            this.containerClass = '';
            this.onInit = new i0.EventEmitter();
            this.onSplideEvent = new i0.EventEmitter();
            this.onMounted = new i0.EventEmitter();
            this.onUpdated = new i0.EventEmitter();
            this.onMove = new i0.EventEmitter();
            this.onMoved = new i0.EventEmitter();
            this.onDrag = new i0.EventEmitter();
            this.onDragged = new i0.EventEmitter();
            this.onVisible = new i0.EventEmitter();
            this.onHidden = new i0.EventEmitter();
            this.onActive = new i0.EventEmitter();
            this.onInactive = new i0.EventEmitter();
            this.onClick = new i0.EventEmitter();
            this.onArrowsMounted = new i0.EventEmitter();
            this.onArrowsUpdated = new i0.EventEmitter();
            this.onPaginationMounted = new i0.EventEmitter();
            this.onPaginationUpdated = new i0.EventEmitter();
            this.onNavigationMounted = new i0.EventEmitter();
            this.onAutoplayPlay = new i0.EventEmitter();
            this.onAutoplayPause = new i0.EventEmitter();
            this.onAutoplayPlaying = new i0.EventEmitter();
            this.onLazyloadLoaded = new i0.EventEmitter();
        }
        NgxSplideComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!i1.isPlatformBrowser(this.platformId))
                return;
            this.splide = new Splide(this.splideElement.nativeElement, this.options);
            if (this.syncWith) {
                this.splide.sync(this.syncWith.getSplideInstance());
            }
            this.onInit.emit(this.splide);
            this.addEventListeners();
            this.splide.mount();
            var slidesSubscription = this.slides.changes
                .subscribe(function (list) {
                _this.cdr.detectChanges();
                setTimeout(function () {
                    _this.splide.destroy();
                    _this.splide.mount();
                    _this.addEventListeners();
                });
            });
            this.cdr.detectChanges();
        };
        NgxSplideComponent.prototype.ngOnChanges = function (changes) {
            if (!this.splide) {
                return;
            }
            if (changes['selectedSlideIndex']) {
                var currentIndex = changes['selectedSlideIndex'].currentValue;
                if (currentIndex !== this.splide.index) {
                    this.splide.go(currentIndex);
                }
            }
            if (changes['options']) {
                this.splide.options = changes['options'].currentValue;
            }
        };
        NgxSplideComponent.prototype.addEventListeners = function () {
            var _this = this;
            this.splide
                .on('mounted', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onMounted.emit(args);
                _this.onSplideEvent.emit({
                    name: 'mounted',
                    args: args
                });
            })
                .on('updated', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onUpdated.emit(args);
                _this.onSplideEvent.emit({
                    name: 'updated',
                    args: args
                });
            })
                .on('move', function (newIndex, oldIndex, destIndex) {
                _this.selectedSlideIndexChange.emit(newIndex);
                _this.onMove.emit([newIndex, oldIndex, destIndex]);
                _this.onSplideEvent.emit({
                    name: 'move',
                    args: [newIndex, oldIndex, destIndex]
                });
            })
                .on('moved', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onMoved.emit(args);
                _this.onSplideEvent.emit({
                    name: 'moved',
                    args: args
                });
            })
                .on('drag', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onDrag.emit(args);
                _this.onSplideEvent.emit({
                    name: 'drag',
                    args: args
                });
            })
                .on('dragged', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onDragged.emit(args);
                _this.onSplideEvent.emit({
                    name: 'dragged',
                    args: args
                });
            })
                .on('visible', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onVisible.emit(args);
                _this.onSplideEvent.emit({
                    name: 'visible',
                    args: args
                });
            })
                .on('hidden', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onHidden.emit(args);
                _this.onSplideEvent.emit({
                    name: 'hidden',
                    args: args
                });
            })
                .on('active', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onActive.emit(args);
                _this.onSplideEvent.emit({
                    name: 'active',
                    args: args
                });
            })
                .on('inactive', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onInactive.emit(args);
                _this.onSplideEvent.emit({
                    name: 'inactive',
                    args: args
                });
            })
                .on('click', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onClick.emit(args);
                _this.onSplideEvent.emit({
                    name: 'click',
                    args: args
                });
            })
                .on('arrows:mounted', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onArrowsMounted.emit(args);
                _this.onSplideEvent.emit({
                    name: 'arrows:mounted',
                    args: args
                });
            })
                .on('arrows:updated', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onArrowsUpdated.emit(args);
                _this.onSplideEvent.emit({
                    name: 'arrows:updated',
                    args: args
                });
            })
                .on('pagination:mounted', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onPaginationMounted.emit(args);
                _this.onSplideEvent.emit({
                    name: 'pagination:mounted',
                    args: args
                });
            })
                .on('pagination:updated', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onPaginationUpdated.emit(args);
                _this.onSplideEvent.emit({
                    name: 'pagination:updated',
                    args: args
                });
            })
                .on('navigation:mounted', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onNavigationMounted.emit(args);
                _this.onSplideEvent.emit({
                    name: 'navigation:mounted',
                    args: args
                });
            })
                .on('autoplay:play', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onAutoplayPlay.emit(args);
                _this.onSplideEvent.emit({
                    name: 'autoplay:play',
                    args: args
                });
            })
                .on('autoplay:pause', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onAutoplayPause.emit(args);
                _this.onSplideEvent.emit({
                    name: 'autoplay:pause',
                    args: args
                });
            })
                .on('autoplay:playing', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onAutoplayPlaying.emit(args);
                _this.onSplideEvent.emit({
                    name: 'autoplay:playing',
                    args: args
                });
            })
                .on('lazyload:loaded', function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.onLazyloadLoaded.emit(args);
                _this.onSplideEvent.emit({
                    name: 'lazyload:loaded',
                    args: args
                });
            });
        };
        NgxSplideComponent.prototype.getSplideInstance = function () {
            return this.splide;
        };
        NgxSplideComponent.prototype.ngOnDestroy = function () {
            if (this.splide) {
                this.splide.destroy(true);
            }
        };
        return NgxSplideComponent;
    }());
    NgxSplideComponent.ɵfac = function NgxSplideComponent_Factory(t) { return new (t || NgxSplideComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0.PLATFORM_ID)); };
    NgxSplideComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NgxSplideComponent, selectors: [["splide"]], contentQueries: function NgxSplideComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0__namespace.ɵɵcontentQuery(dirIndex, NgxSplideSlideComponent, 4);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.slides = _t);
            }
        }, viewQuery: function NgxSplideComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.splideElement = _t.first);
            }
        }, inputs: { selectedSlideIndex: "selectedSlideIndex", options: "options", containerClass: "containerClass", syncWith: "syncWith" }, outputs: { selectedSlideIndexChange: "selectedSlideIndexChange", onInit: "onInit", onSplideEvent: "onSplideEvent", onMounted: "onMounted", onUpdated: "onUpdated", onMove: "onMove", onMoved: "onMoved", onDrag: "onDrag", onDragged: "onDragged", onVisible: "onVisible", onHidden: "onHidden", onActive: "onActive", onInactive: "onInactive", onClick: "onClick", onArrowsMounted: "onArrowsMounted", onArrowsUpdated: "onArrowsUpdated", onPaginationMounted: "onPaginationMounted", onPaginationUpdated: "onPaginationUpdated", onNavigationMounted: "onNavigationMounted", onAutoplayPlay: "onAutoplayPlay", onAutoplayPause: "onAutoplayPause", onAutoplayPlaying: "onAutoplayPlaying", onLazyloadLoaded: "onLazyloadLoaded" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 5, vars: 2, consts: [[1, "splide", 3, "ngClass"], ["splideElement", ""], [1, "splide__track"], [1, "splide__list"], ["class", "splide__slide", 4, "ngFor", "ngForOf"], [1, "splide__slide"], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NgxSplideComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0, 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelementStart(3, "div", 3);
                i0__namespace.ɵɵtemplate(4, NgxSplideComponent_div_4_Template, 2, 1, "div", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngClass", ctx.containerClass);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.slides);
            }
        }, directives: [i1__namespace.NgClass, i1__namespace.NgForOf, i1__namespace.NgIf, i1__namespace.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxSplideComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'splide',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        templateUrl: './ngx-splide.component.html'
                    }]
            }], function () {
            return [{ type: i0__namespace.ChangeDetectorRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }];
        }, { selectedSlideIndex: [{
                    type: i0.Input
                }], selectedSlideIndexChange: [{
                    type: i0.Output
                }], options: [{
                    type: i0.Input
                }], containerClass: [{
                    type: i0.Input
                }], syncWith: [{
                    type: i0.Input
                }], onInit: [{
                    type: i0.Output
                }], onSplideEvent: [{
                    type: i0.Output
                }], onMounted: [{
                    type: i0.Output
                }], onUpdated: [{
                    type: i0.Output
                }], onMove: [{
                    type: i0.Output
                }], onMoved: [{
                    type: i0.Output
                }], onDrag: [{
                    type: i0.Output
                }], onDragged: [{
                    type: i0.Output
                }], onVisible: [{
                    type: i0.Output
                }], onHidden: [{
                    type: i0.Output
                }], onActive: [{
                    type: i0.Output
                }], onInactive: [{
                    type: i0.Output
                }], onClick: [{
                    type: i0.Output
                }], onArrowsMounted: [{
                    type: i0.Output
                }], onArrowsUpdated: [{
                    type: i0.Output
                }], onPaginationMounted: [{
                    type: i0.Output
                }], onPaginationUpdated: [{
                    type: i0.Output
                }], onNavigationMounted: [{
                    type: i0.Output
                }], onAutoplayPlay: [{
                    type: i0.Output
                }], onAutoplayPause: [{
                    type: i0.Output
                }], onAutoplayPlaying: [{
                    type: i0.Output
                }], onLazyloadLoaded: [{
                    type: i0.Output
                }], slides: [{
                    type: i0.ContentChildren,
                    args: [NgxSplideSlideComponent]
                }], splideElement: [{
                    type: i0.ViewChild,
                    args: ['splideElement']
                }] });
    })();

    var NgxSplideModule = /** @class */ (function () {
        function NgxSplideModule() {
        }
        return NgxSplideModule;
    }());
    NgxSplideModule.ɵfac = function NgxSplideModule_Factory(t) { return new (t || NgxSplideModule)(); };
    NgxSplideModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: NgxSplideModule });
    NgxSplideModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1.CommonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxSplideModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NgxSplideComponent, NgxSplideSlideComponent],
                        imports: [i1.CommonModule],
                        exports: [NgxSplideComponent, NgxSplideSlideComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxSplideModule, { declarations: [NgxSplideComponent, NgxSplideSlideComponent], imports: [i1.CommonModule], exports: [NgxSplideComponent, NgxSplideSlideComponent] }); })();

    /*
     * Public API Surface of ngx-splide
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxSplideComponent = NgxSplideComponent;
    exports.NgxSplideModule = NgxSplideModule;
    exports.NgxSplideSlideComponent = NgxSplideSlideComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-splide.umd.js.map
