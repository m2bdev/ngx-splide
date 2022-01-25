import { isPlatformBrowser } from '@angular/common';
import { Component, ContentChildren, Input, Output, ViewChild, EventEmitter, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { NgxSplideSlideComponent } from './ngx-splide-slide.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    } }, inputs: { selectedSlideIndex: "selectedSlideIndex", options: "options", containerClass: "containerClass", syncWith: "syncWith" }, outputs: { selectedSlideIndexChange: "selectedSlideIndexChange", onInit: "onInit", onSplideEvent: "onSplideEvent", onMounted: "onMounted", onUpdated: "onUpdated", onMove: "onMove", onMoved: "onMoved", onDrag: "onDrag", onDragged: "onDragged", onVisible: "onVisible", onHidden: "onHidden", onActive: "onActive", onInactive: "onInactive", onClick: "onClick", onArrowsMounted: "onArrowsMounted", onArrowsUpdated: "onArrowsUpdated", onPaginationMounted: "onPaginationMounted", onPaginationUpdated: "onPaginationUpdated", onNavigationMounted: "onNavigationMounted", onAutoplayPlay: "onAutoplayPlay", onAutoplayPause: "onAutoplayPause", onAutoplayPlaying: "onAutoplayPlaying", onLazyloadLoaded: "onLazyloadLoaded" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 2, consts: [[1, "splide", 3, "ngClass"], ["splideElement", ""], [1, "splide__track"], [1, "splide__list"], ["class", "splide__slide", 4, "ngFor", "ngForOf"], [1, "splide__slide"], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NgxSplideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, NgxSplideComponent_div_4_Template, 2, 1, "div", 4);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwbGlkZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3BsaWRlL3NyYy9saWIvbmd4LXNwbGlkZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3BsaWRlL3NyYy9saWIvbmd4LXNwbGlkZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBRUgsU0FBUyxFQUNULGVBQWUsRUFFZixLQUFLLEVBQXdCLE1BQU0sRUFFbkMsU0FBUyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBcUIsTUFBTSxFQUFFLFdBQVcsRUFDM0YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7OztJQ052RCwyRkFBOEY7OztJQUF0RCx3REFBdUM7OztJQURuRiw4QkFBeUQ7SUFDckQseUVBQThGO0lBQ2xHLGlCQUFNOzs7SUFEWSxlQUF3QjtJQUF4Qiw0Q0FBd0I7O0FEZXRELE1BQU0sT0FBTyxrQkFBa0I7SUFzQzNCLFlBQW9CLEdBQXNCLEVBQWdDLFVBQWU7UUFBckUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBZ0MsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQW5DL0UsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV2RCxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRzNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixXQUFN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dUJBQXVCO1lBRVosYUFBYTtrQkFBeEMsU0FBUzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIENvbnRlbnRDaGlsZHJlbixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE91dHB1dCxcclxuICAgIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcyxcclxuICAgIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdCwgUExBVEZPUk1fSURcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4U3BsaWRlU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL25neC1zcGxpZGUtc2xpZGUuY29tcG9uZW50JztcclxuXHJcbmRlY2xhcmUgdmFyIFNwbGlkZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NwbGlkZScsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtc3BsaWRlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4U3BsaWRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3lcclxue1xyXG4gICAgQElucHV0KCkgc2VsZWN0ZWRTbGlkZUluZGV4OiBudW1iZXI7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRTbGlkZUluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XHJcbiAgICBASW5wdXQoKSBjb250YWluZXJDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgICBASW5wdXQoKSBzeW5jV2l0aDogTmd4U3BsaWRlQ29tcG9uZW50O1xyXG5cclxuICAgIEBPdXRwdXQoKSBvbkluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBvblNwbGlkZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpIG9uTW91bnRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvblVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25Nb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uTW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25EcmFnID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uRHJhZ2dlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvblZpc2libGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25IaWRkZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25BY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25JbmFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uQXJyb3dzTW91bnRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvbkFycm93c1VwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25QYWdpbmF0aW9uTW91bnRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBvblBhZ2luYXRpb25VcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uTmF2aWdhdGlvbk1vdW50ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25BdXRvcGxheVBsYXkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgb25BdXRvcGxheVBhdXNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uQXV0b3BsYXlQbGF5aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIG9uTGF6eWxvYWRMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihOZ3hTcGxpZGVTbGlkZUNvbXBvbmVudCkgcHVibGljIHNsaWRlczogUXVlcnlMaXN0PE5neFNwbGlkZVNsaWRlQ29tcG9uZW50PjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdzcGxpZGVFbGVtZW50Jykgc3BsaWRlRWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIHByb3RlY3RlZCBzcGxpZGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHsgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc3BsaWRlID0gbmV3IFNwbGlkZSh0aGlzLnNwbGlkZUVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICBpZiAodGhpcy5zeW5jV2l0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwbGlkZS5zeW5jKHRoaXMuc3luY1dpdGguZ2V0U3BsaWRlSW5zdGFuY2UoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uSW5pdC5lbWl0KHRoaXMuc3BsaWRlKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5zcGxpZGUubW91bnQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xpZGVzU3Vic2NyaXB0aW9uID0gdGhpcy5zbGlkZXMuY2hhbmdlc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsaXN0OiBRdWVyeUxpc3Q8Tmd4U3BsaWRlU2xpZGVDb21wb25lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BsaWRlLm1vdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuXHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwbGlkZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlc1snc2VsZWN0ZWRTbGlkZUluZGV4J10pIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gY2hhbmdlc1snc2VsZWN0ZWRTbGlkZUluZGV4J10uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ICE9PSB0aGlzLnNwbGlkZS5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpZGUuZ28oY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNbJ29wdGlvbnMnXSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwbGlkZS5vcHRpb25zID0gY2hhbmdlc1snb3B0aW9ucyddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3BsaWRlXHJcbiAgICAgICAgICAgIC5vbignbW91bnRlZCcsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Nb3VudGVkLmVtaXQoYXJncyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdW50ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ3VwZGF0ZWQnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVXBkYXRlZC5lbWl0KGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdtb3ZlJywgKG5ld0luZGV4LCBvbGRJbmRleCwgZGVzdEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2xpZGVJbmRleENoYW5nZS5lbWl0KG5ld0luZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Nb3ZlLmVtaXQoWyBuZXdJbmRleCwgb2xkSW5kZXgsIGRlc3RJbmRleCBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFsgbmV3SW5kZXgsIG9sZEluZGV4LCBkZXN0SW5kZXggXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignbW92ZWQnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW92ZWQuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ21vdmVkJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdkcmFnJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkRyYWcuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RyYWcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2RyYWdnZWQnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZ2dlZC5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJhZ2dlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbigndmlzaWJsZScsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WaXNpYmxlLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd2aXNpYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdoaWRkZW4nLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSGlkZGVuLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2FjdGl2ZScsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25BY3RpdmUuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignaW5hY3RpdmUnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSW5hY3RpdmUuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luYWN0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25DbGljay5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xpY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2Fycm93czptb3VudGVkJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93c01vdW50ZWQuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Fycm93czptb3VudGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdhcnJvd3M6dXBkYXRlZCcsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd3NVcGRhdGVkLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhcnJvd3M6dXBkYXRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbigncGFnaW5hdGlvbjptb3VudGVkJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Nb3VudGVkLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uOm1vdW50ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ3BhZ2luYXRpb246dXBkYXRlZCcsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25QYWdpbmF0aW9uVXBkYXRlZC5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbjp1cGRhdGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCduYXZpZ2F0aW9uOm1vdW50ZWQnLCAoIC4uLmFyZ3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmF2aWdhdGlvbk1vdW50ZWQuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25hdmlnYXRpb246bW91bnRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignYXV0b3BsYXk6cGxheScsICggLi4uYXJncyApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25BdXRvcGxheVBsYXkuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F1dG9wbGF5OnBsYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2F1dG9wbGF5OnBhdXNlJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkF1dG9wbGF5UGF1c2UuZW1pdChhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BsaWRlRXZlbnQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F1dG9wbGF5OnBhdXNlJyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdhdXRvcGxheTpwbGF5aW5nJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkF1dG9wbGF5UGxheWluZy5lbWl0KGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25TcGxpZGVFdmVudC5lbWl0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXV0b3BsYXk6cGxheWluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignbGF6eWxvYWQ6bG9hZGVkJywgKCAuLi5hcmdzICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkxhenlsb2FkTG9hZGVkLmVtaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwbGlkZUV2ZW50LmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsYXp5bG9hZDpsb2FkZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcGxpZGVJbnN0YW5jZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWRlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zcGxpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGxpZGUuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiAjc3BsaWRlRWxlbWVudCBjbGFzcz1cInNwbGlkZVwiIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3BsaWRlX190cmFja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpZGVfX2xpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwbGlkZV9fc2xpZGVcIiAqbmdGb3I9XCJsZXQgc2xpZGUgb2Ygc2xpZGVzO1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwic2xpZGUuc2xpZGVDb250ZW50XCIgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGUuc2xpZGVDb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==