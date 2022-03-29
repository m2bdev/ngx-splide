import {Component, Input, TemplateRef, ViewChild} from "@angular/core";

@Component({
    selector: 'splide-slide',
    template: '<ng-template #slideContent><ng-content></ng-content></ng-template>'
})
export class NgxSplideSlideComponent
{
    @Input()
    public class: string;
    @ViewChild('slideContent')
    public slideContent: TemplateRef<any>;
}
