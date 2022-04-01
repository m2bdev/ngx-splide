import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, Input, ViewChild, EventEmitter, PLATFORM_ID, ChangeDetectionStrategy, Inject, Output, ContentChildren, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { isPlatformBrowser, CommonModule } from '@angular/common';

const _c0$1 = ["slideContent"];
function NgxSplideSlideComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c1 = ["*"];
class NgxSplideSlideComponent {
}
NgxSplideSlideComponent.ɵfac = function NgxSplideSlideComponent_Factory(t) { return new (t || NgxSplideSlideComponent)(); };
NgxSplideSlideComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxSplideSlideComponent, selectors: [["splide-slide"]], viewQuery: function NgxSplideSlideComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slideContent = _t.first);
    } }, inputs: { class: "class" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["slideContent", ""]], template: function NgxSplideSlideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NgxSplideSlideComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxSplideSlideComponent, [{
        type: Component,
        args: [{
                selector: 'splide-slide',
                template: '<ng-template #slideContent><ng-content></ng-content></ng-template>',
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { class: [{
            type: Input
        }], slideContent: [{
            type: ViewChild,
            args: ['slideContent']
        }] }); })();

const _c0 = ["splideElement"];
function NgxSplideComponent_div_4_1_ng_template_0_Template(rf, ctx) { }
function NgxSplideComponent_div_4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NgxSplideComponent_div_4_1_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const slide_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", slide_r2.slideContent);
} }
function NgxSplideComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, NgxSplideComponent_div_4_1_Template, 1, 1, undefined, 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    i0.ɵɵclassMap(slide_r2.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", slide_r2.slideContent);
} }
class NgxSplideComponent {
    constructor(cdr, platformId) {
        this.cdr = cdr;
        this.platformId = platformId;
        this.selectedSlideIndexChange = new EventEmitter();
        this.options = {};
        this.containerClass = '';
        this.onInit = new EventEmitter();
        this.onSplideEvent = new EventEmitter();
        this.onMounted = new EventEmitter();
        this.onUpdated = new EventEmitter();
        this.onMove = new EventEmitter();
        this.onMoved = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragged = new EventEmitter();
        this.onVisible = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.onActive = new EventEmitter();
        this.onInactive = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onArrowsMounted = new EventEmitter();
        this.onArrowsUpdated = new EventEmitter();
        this.onPaginationMounted = new EventEmitter();
        this.onPaginationUpdated = new EventEmitter();
        this.onNavigationMounted = new EventEmitter();
        this.onAutoplayPlay = new EventEmitter();
        this.onAutoplayPause = new EventEmitter();
        this.onAutoplayPlaying = new EventEmitter();
        this.onLazyloadLoaded = new EventEmitter();
    }
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId))
            return;
        this.splide = new Splide(this.splideElement.nativeElement, this.options);
        if (this.syncWith) {
            this.splide.sync(this.syncWith.getSplideInstance());
        }
        this.onInit.emit(this.splide);
        this.addEventListeners();
        this.splide.mount();
        const slidesSubscription = this.slides.changes
            .subscribe((list) => {
            this.cdr.detectChanges();
            setTimeout(() => {
                this.splide.destroy();
                this.splide.mount();
                this.addEventListeners();
            });
        });
        this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
        if (!this.splide) {
            return;
        }
        if (changes['selectedSlideIndex']) {
            const currentIndex = changes['selectedSlideIndex'].currentValue;
            if (currentIndex !== this.splide.index) {
                this.splide.go(currentIndex);
            }
        }
        if (changes['options']) {
            this.splide.options = changes['options'].currentValue;
        }
    }
    addEventListeners() {
        this.splide
            .on('mounted', (...args) => {
            this.onMounted.emit(args);
            this.onSplideEvent.emit({
                name: 'mounted',
                args
            });
        })
            .on('updated', (...args) => {
            this.onUpdated.emit(args);
            this.onSplideEvent.emit({
                name: 'updated',
                args
            });
        })
            .on('move', (newIndex, oldIndex, destIndex) => {
            this.selectedSlideIndexChange.emit(newIndex);
            this.onMove.emit([newIndex, oldIndex, destIndex]);
            this.onSplideEvent.emit({
                name: 'move',
                args: [newIndex, oldIndex, destIndex]
            });
        })
            .on('moved', (...args) => {
            this.onMoved.emit(args);
            this.onSplideEvent.emit({
                name: 'moved',
                args
            });
        })
            .on('drag', (...args) => {
            this.onDrag.emit(args);
            this.onSplideEvent.emit({
                name: 'drag',
                args
            });
        })
            .on('dragged', (...args) => {
            this.onDragged.emit(args);
            this.onSplideEvent.emit({
                name: 'dragged',
                args
            });
        })
            .on('visible', (...args) => {
            this.onVisible.emit(args);
            this.onSplideEvent.emit({
                name: 'visible',
                args
            });
        })
            .on('hidden', (...args) => {
            this.onHidden.emit(args);
            this.onSplideEvent.emit({
                name: 'hidden',
                args
            });
        })
            .on('active', (...args) => {
            this.onActive.emit(args);
            this.onSplideEvent.emit({
                name: 'active',
                args
            });
        })
            .on('inactive', (...args) => {
            this.onInactive.emit(args);
            this.onSplideEvent.emit({
                name: 'inactive',
                args
            });
        })
            .on('click', (...args) => {
            this.onClick.emit(args);
            this.onSplideEvent.emit({
                name: 'click',
                args
            });
        })
            .on('arrows:mounted', (...args) => {
            this.onArrowsMounted.emit(args);
            this.onSplideEvent.emit({
                name: 'arrows:mounted',
                args
            });
        })
            .on('arrows:updated', (...args) => {
            this.onArrowsUpdated.emit(args);
            this.onSplideEvent.emit({
                name: 'arrows:updated',
                args
            });
        })
            .on('pagination:mounted', (...args) => {
            this.onPaginationMounted.emit(args);
            this.onSplideEvent.emit({
                name: 'pagination:mounted',
                args
            });
        })
            .on('pagination:updated', (...args) => {
            this.onPaginationUpdated.emit(args);
            this.onSplideEvent.emit({
                name: 'pagination:updated',
                args
            });
        })
            .on('navigation:mounted', (...args) => {
            this.onNavigationMounted.emit(args);
            this.onSplideEvent.emit({
                name: 'navigation:mounted',
                args
            });
        })
            .on('autoplay:play', (...args) => {
            this.onAutoplayPlay.emit(args);
            this.onSplideEvent.emit({
                name: 'autoplay:play',
                args
            });
        })
            .on('autoplay:pause', (...args) => {
            this.onAutoplayPause.emit(args);
            this.onSplideEvent.emit({
                name: 'autoplay:pause',
                args
            });
        })
            .on('autoplay:playing', (...args) => {
            this.onAutoplayPlaying.emit(args);
            this.onSplideEvent.emit({
                name: 'autoplay:playing',
                args
            });
        })
            .on('lazyload:loaded', (...args) => {
            this.onLazyloadLoaded.emit(args);
            this.onSplideEvent.emit({
                name: 'lazyload:loaded',
                args
            });
        });
    }
    getSplideInstance() {
        return this.splide;
    }
    ngOnDestroy() {
        if (this.splide) {
            this.splide.destroy(true);
        }
    }
}
NgxSplideComponent.ɵfac = function NgxSplideComponent_Factory(t) { return new (t || NgxSplideComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
NgxSplideComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxSplideComponent, selectors: [["splide"]], contentQueries: function NgxSplideComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NgxSplideSlideComponent, 4);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slides = _t);
    } }, viewQuery: function NgxSplideComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splideElement = _t.first);
    } }, inputs: { selectedSlideIndex: "selectedSlideIndex", options: "options", containerClass: "containerClass", syncWith: "syncWith" }, outputs: { selectedSlideIndexChange: "selectedSlideIndexChange", onInit: "onInit", onSplideEvent: "onSplideEvent", onMounted: "onMounted", onUpdated: "onUpdated", onMove: "onMove", onMoved: "onMoved", onDrag: "onDrag", onDragged: "onDragged", onVisible: "onVisible", onHidden: "onHidden", onActive: "onActive", onInactive: "onInactive", onClick: "onClick", onArrowsMounted: "onArrowsMounted", onArrowsUpdated: "onArrowsUpdated", onPaginationMounted: "onPaginationMounted", onPaginationUpdated: "onPaginationUpdated", onNavigationMounted: "onNavigationMounted", onAutoplayPlay: "onAutoplayPlay", onAutoplayPause: "onAutoplayPause", onAutoplayPlaying: "onAutoplayPlaying", onLazyloadLoaded: "onLazyloadLoaded" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 2, consts: [[1, "splide", 3, "ngClass"], ["splideElement", ""], [1, "splide__track"], [1, "splide__list"], ["class", "splide__slide", 3, "class", 4, "ngFor", "ngForOf"], [1, "splide__slide"], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NgxSplideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, NgxSplideComponent_div_4_Template, 2, 3, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.containerClass);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.slides);
    } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxSplideComponent, [{
        type: Component,
        args: [{
                selector: 'splide',
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './ngx-splide.component.html'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { selectedSlideIndex: [{
            type: Input
        }], selectedSlideIndexChange: [{
            type: Output
        }], options: [{
            type: Input
        }], containerClass: [{
            type: Input
        }], syncWith: [{
            type: Input
        }], onInit: [{
            type: Output
        }], onSplideEvent: [{
            type: Output
        }], onMounted: [{
            type: Output
        }], onUpdated: [{
            type: Output
        }], onMove: [{
            type: Output
        }], onMoved: [{
            type: Output
        }], onDrag: [{
            type: Output
        }], onDragged: [{
            type: Output
        }], onVisible: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], onActive: [{
            type: Output
        }], onInactive: [{
            type: Output
        }], onClick: [{
            type: Output
        }], onArrowsMounted: [{
            type: Output
        }], onArrowsUpdated: [{
            type: Output
        }], onPaginationMounted: [{
            type: Output
        }], onPaginationUpdated: [{
            type: Output
        }], onNavigationMounted: [{
            type: Output
        }], onAutoplayPlay: [{
            type: Output
        }], onAutoplayPause: [{
            type: Output
        }], onAutoplayPlaying: [{
            type: Output
        }], onLazyloadLoaded: [{
            type: Output
        }], slides: [{
            type: ContentChildren,
            args: [NgxSplideSlideComponent]
        }], splideElement: [{
            type: ViewChild,
            args: ['splideElement']
        }] }); })();

class NgxSplideModule {
}
NgxSplideModule.ɵfac = function NgxSplideModule_Factory(t) { return new (t || NgxSplideModule)(); };
NgxSplideModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxSplideModule });
NgxSplideModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxSplideModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxSplideComponent, NgxSplideSlideComponent],
                imports: [CommonModule],
                exports: [NgxSplideComponent, NgxSplideSlideComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxSplideModule, { declarations: [NgxSplideComponent, NgxSplideSlideComponent], imports: [CommonModule], exports: [NgxSplideComponent, NgxSplideSlideComponent] }); })();

/*
 * Public API Surface of ngx-splide
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSplideComponent, NgxSplideModule, NgxSplideSlideComponent };
//# sourceMappingURL=ngx-splide.js.map
