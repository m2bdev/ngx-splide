import { AfterViewInit, ElementRef, OnChanges, OnDestroy, QueryList, SimpleChanges, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { NgxSplideSlideComponent } from './ngx-splide-slide.component';
import * as i0 from "@angular/core";
export declare class NgxSplideComponent implements AfterViewInit, OnChanges, OnDestroy {
    private cdr;
    private platformId;
    selectedSlideIndex: number;
    selectedSlideIndexChange: EventEmitter<number>;
    options: any;
    containerClass: string;
    syncWith: NgxSplideComponent;
    onInit: EventEmitter<any>;
    onSplideEvent: EventEmitter<any>;
    onMounted: EventEmitter<any>;
    onUpdated: EventEmitter<any>;
    onMove: EventEmitter<any>;
    onMoved: EventEmitter<any>;
    onDrag: EventEmitter<any>;
    onDragged: EventEmitter<any>;
    onVisible: EventEmitter<any>;
    onHidden: EventEmitter<any>;
    onActive: EventEmitter<any>;
    onInactive: EventEmitter<any>;
    onClick: EventEmitter<any>;
    onArrowsMounted: EventEmitter<any>;
    onArrowsUpdated: EventEmitter<any>;
    onPaginationMounted: EventEmitter<any>;
    onPaginationUpdated: EventEmitter<any>;
    onNavigationMounted: EventEmitter<any>;
    onAutoplayPlay: EventEmitter<any>;
    onAutoplayPause: EventEmitter<any>;
    onAutoplayPlaying: EventEmitter<any>;
    onLazyloadLoaded: EventEmitter<any>;
    slides: QueryList<NgxSplideSlideComponent>;
    splideElement: ElementRef;
    protected splide: any;
    constructor(cdr: ChangeDetectorRef, platformId: any);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    addEventListeners(): void;
    getSplideInstance(): any;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxSplideComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxSplideComponent, "splide", never, { "selectedSlideIndex": "selectedSlideIndex"; "options": "options"; "containerClass": "containerClass"; "syncWith": "syncWith"; }, { "selectedSlideIndexChange": "selectedSlideIndexChange"; "onInit": "onInit"; "onSplideEvent": "onSplideEvent"; "onMounted": "onMounted"; "onUpdated": "onUpdated"; "onMove": "onMove"; "onMoved": "onMoved"; "onDrag": "onDrag"; "onDragged": "onDragged"; "onVisible": "onVisible"; "onHidden": "onHidden"; "onActive": "onActive"; "onInactive": "onInactive"; "onClick": "onClick"; "onArrowsMounted": "onArrowsMounted"; "onArrowsUpdated": "onArrowsUpdated"; "onPaginationMounted": "onPaginationMounted"; "onPaginationUpdated": "onPaginationUpdated"; "onNavigationMounted": "onNavigationMounted"; "onAutoplayPlay": "onAutoplayPlay"; "onAutoplayPause": "onAutoplayPause"; "onAutoplayPlaying": "onAutoplayPlaying"; "onLazyloadLoaded": "onLazyloadLoaded"; }, ["slides"], never>;
}
//# sourceMappingURL=ngx-splide.component.d.ts.map