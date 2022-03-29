import { isPlatformBrowser } from '@angular/common';
import { Component, ContentChildren, Input, Output, ViewChild, EventEmitter, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { NgxSplideSlideComponent } from './ngx-splide-slide.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["splideElement"];
function NgxSplideComponent_li_4_1_ng_template_0_Template(rf, ctx) { }
function NgxSplideComponent_li_4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NgxSplideComponent_li_4_1_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const slide_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngTemplateOutlet", slide_r2.slideContent);
} }
function NgxSplideComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtemplate(1, NgxSplideComponent_li_4_1_Template, 1, 1, undefined, 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    i0.ɵɵclassMap(slide_r2.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", slide_r2.slideContent);
} }
export class NgxSplideComponent {
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
        i0.ɵɵelementStart(3, "ul", 3);
        i0.ɵɵtemplate(4, NgxSplideComponent_li_4_Template, 2, 3, "li", 4);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwbGlkZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3BsaWRlL3NyYy9saWIvbmd4LXNwbGlkZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3BsaWRlL3NyYy9saWIvbmd4LXNwbGlkZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBRUgsU0FBUyxFQUNULGVBQWUsRUFFZixLQUFLLEVBQXdCLE1BQU0sRUFFbkMsU0FBUyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBcUIsTUFBTSxFQUFFLFdBQVcsRUFDM0YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7OztJQ052RCwwRkFBOEY7OztJQUF0RCx3REFBdUM7OztJQURuRiw2QkFBOEU7SUFDMUUsd0VBQThGO0lBQ2xHLGlCQUFLOzs7SUFGbUQsNkJBQXFCO0lBQzNELGVBQXdCO0lBQXhCLDRDQUF3Qjs7QURldEQsTUFBTSxPQUFPLGtCQUFrQjtJQXNDM0IsWUFBb0IsR0FBc0IsRUFBZ0MsVUFBZTtRQUFyRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFnQyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBbkMvRSw2QkFBd0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXZELFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFHM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxD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dEQsZUFBZTttQkFBQyx1QkFBdUI7WUFFWixhQUFhO2tCQUF4QyxTQUFTO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgQ29udGVudENoaWxkcmVuLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3V0cHV0LFxyXG4gICAgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0LCBQTEFURk9STV9JRFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hTcGxpZGVTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LXNwbGlkZS1zbGlkZS5jb21wb25lbnQnO1xyXG5cclxuZGVjbGFyZSB2YXIgU3BsaWRlOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3BsaWRlJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1zcGxpZGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hTcGxpZGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveVxyXG57XHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZFNsaWRlSW5kZXg6IG51bWJlcjtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZFNsaWRlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcclxuICAgIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzOiBzdHJpbmcgPSAnJztcclxuICAgIEBJbnB1dCgpIHN5bmNXaXRoOiBOZ3hTcGxpZGVDb21wb25lbnQ7XHJcblxyXG4gICAgQE91dHB1dCgpIG9uSW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIG9uU3BsaWRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgb25Nb3VudGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uVXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbk1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25Nb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbkRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uVmlzaWJsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbkhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbkFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbkluYWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25BcnJvd3NNb3VudGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uQXJyb3dzVXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvblBhZ2luYXRpb25Nb3VudGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uUGFnaW5hdGlvblVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25OYXZpZ2F0aW9uTW91bnRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbkF1dG9wbGF5UGxheSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbkF1dG9wbGF5UGF1c2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25BdXRvcGxheVBsYXlpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25MYXp5bG9hZExvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKE5neFNwbGlkZVNsaWRlQ29tcG9uZW50KSBwdWJsaWMgc2xpZGVzOiBRdWVyeUxpc3Q8Tmd4U3BsaWRlU2xpZGVDb21wb25lbnQ+O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3NwbGlkZUVsZW1lbnQnKSBzcGxpZGVFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgcHJvdGVjdGVkIHNwbGlkZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KClcclxuICAgIHtcclxuICAgICAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zcGxpZGUgPSBuZXcgU3BsaWRlKHRoaXMuc3BsaWRlRWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLnN5bmNXaXRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BsaWRlLnN5bmModGhpcy5zeW5jV2l0aC5nZXRTcGxpZGVJbnN0YW5jZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25Jbml0LmVtaXQodGhpcy5zcGxpZGUpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLnNwbGlkZS5tb3VudCgpO1xyXG5cclxuICAgICAgICBjb25zdCBzbGlkZXNTdWJzY3JpcHRpb24gPSB0aGlzLnNsaWRlcy5jaGFuZ2VzXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGxpc3Q6IFF1ZXJ5TGlzdDxOZ3hTcGxpZGVTbGlkZUNvbXBvbmVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGlkZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpZGUubW91bnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcylcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3BsaWRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzWydzZWxlY3RlZFNsaWRlSW5kZXgnXSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjaGFuZ2VzWydzZWxlY3RlZFNsaWRlSW5kZXgnXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggIT09IHRoaXMuc3BsaWRlLmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGlkZS5nbyhjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlc1snb3B0aW9ucyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BsaWRlLm9wdGlvbnMgPSBjaGFuZ2VzWydvcHRpb25zJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zcGxpZGVcclxuICAgICAgICAgICAgLm9uKCdtb3VudGVkJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vdW50ZWQuZW1pdChhcmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW91bnRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbigndXBkYXRlZCcsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25VcGRhdGVkLmVtaXQoYXJncyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ21vdmUnLCAobmV3SW5kZXgsIG9sZEluZGV4LCBkZXN0SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTbGlkZUluZGV4Q2hhbmdlLmVtaXQobmV3SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vdmUuZW1pdChbIG5ld0luZGV4LCBvbGRJbmRleCwgZGVzdEluZGV4IF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnczogWyBuZXdJbmRleCwgb2xkSW5kZXgsIGRlc3RJbmRleCBdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdtb3ZlZCcsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Nb3ZlZC5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbW92ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2RyYWcnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZy5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJhZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignZHJhZ2dlZCcsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EcmFnZ2VkLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcmFnZ2VkJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCd2aXNpYmxlJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZpc2libGUuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Zpc2libGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2hpZGRlbicsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25IaWRkZW4uZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignYWN0aXZlJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFjdGl2ZS5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWN0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdpbmFjdGl2ZScsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25JbmFjdGl2ZS5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5hY3RpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignYXJyb3dzOm1vdW50ZWQnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dzTW91bnRlZC5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXJyb3dzOm1vdW50ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2Fycm93czp1cGRhdGVkJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93c1VwZGF0ZWQuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Fycm93czp1cGRhdGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdwYWdpbmF0aW9uOm1vdW50ZWQnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFnaW5hdGlvbk1vdW50ZWQuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRpb246bW91bnRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbigncGFnaW5hdGlvbjp1cGRhdGVkJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25VcGRhdGVkLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uOnVwZGF0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ25hdmlnYXRpb246bW91bnRlZCcsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25OYXZpZ2F0aW9uTW91bnRlZC5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmF2aWdhdGlvbjptb3VudGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdhdXRvcGxheTpwbGF5JywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkF1dG9wbGF5UGxheS5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXV0b3BsYXk6cGxheScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignYXV0b3BsYXk6cGF1c2UnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXV0b3BsYXlQYXVzZS5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXV0b3BsYXk6cGF1c2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2F1dG9wbGF5OnBsYXlpbmcnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXV0b3BsYXlQbGF5aW5nLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhdXRvcGxheTpwbGF5aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdsYXp5bG9hZDpsb2FkZWQnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTGF6eWxvYWRMb2FkZWQuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xhenlsb2FkOmxvYWRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwbGlkZUluc3RhbmNlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGxpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnNwbGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwbGlkZS5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2ICNzcGxpZGVFbGVtZW50IGNsYXNzPVwic3BsaWRlXCIgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3NcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzcGxpZGVfX3RyYWNrXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwic3BsaWRlX19saXN0XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInNwbGlkZV9fc2xpZGVcIiAqbmdGb3I9XCJsZXQgc2xpZGUgb2Ygc2xpZGVzO1wiIFtjbGFzc109XCJzbGlkZS5jbGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwic2xpZGUuc2xpZGVDb250ZW50XCIgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGUuc2xpZGVDb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=