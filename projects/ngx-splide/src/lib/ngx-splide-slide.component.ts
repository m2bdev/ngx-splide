import {Component, Input, TemplateRef, ViewChild, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'splide-slide',
    template: '<ng-template #slideContent><ng-content></ng-content></ng-template>',
    encapsulation: ViewEncapsulation.None
})
export class NgxSplideSlideComponent
{
    @Input()
    public class: string;
    @ViewChild('slideContent')
    public slideContent: TemplateRef<any>;
}
