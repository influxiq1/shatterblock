/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent, Confirmdialog, BottomSheet } from './listing.component';
import { DemoMaterialModule } from './materialmodules';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
//import { FooterComponent } from './footer/footer.component';
//import { MyfromComponent } from './myfrom/myfrom.component';
//import {DynamicFieldDirective} from "./myfrom/dynamic-field.directive";
import { MatFileUploadModule } from 'angular-material-fileupload';
import { NgxUploaderModule } from "ngx-uploader";
import { RouterModule } from "@angular/router";
// import { FieldConfig } from './myfrom/field.interface';
// import { DynamicFieldDirective } from './myfrom/dynamic-field.directive';
// import { DynamicFormBuilderComponent } from '../lib/dynamic-form-builder/dynamic-form-builder.component';
/*
import { FieldBuilderComponent } from '../lib/dynamic-form-builder/field-builder/field-builder.component';
import { TextBoxComponent } from '../lib/dynamic-form-builder/atoms/textbox';
import { DropDownComponent } from '../lib/dynamic-form-builder/atoms/dropdown';
import { FileComponent } from '../lib/dynamic-form-builder/atoms/file';
import { CheckBoxComponent } from '../lib/dynamic-form-builder/atoms/checkbox';
import { RadioComponent } from '../lib/dynamic-form-builder/atoms/radio';
*/
var ListingModule = /** @class */ (function () {
    function ListingModule() {
    }
    ListingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ListingComponent, Confirmdialog, BottomSheet,
                    ],
                    imports: [
                        CommonModule,
                        BrowserModule, BrowserAnimationsModule,
                        DemoMaterialModule,
                        FormsModule, ReactiveFormsModule,
                        MatFileUploadModule, NgxUploaderModule, RouterModule,
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    exports: [ListingComponent,
                        //MyfromComponent,
                        NgxUploaderModule],
                    providers: [ApiService],
                    entryComponents: [Confirmdialog, BottomSheet],
                },] }
    ];
    return ListingModule;
}());
export { ListingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUk3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7QUFlN0M7SUFBQTtJQTRCQSxDQUFDOztnQkE1QkEsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxXQUFXO3FCQU10QztvQkFDakIsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osYUFBYSxFQUFFLHVCQUF1Qjt3QkFDdEMsa0JBQWtCO3dCQUNsQixXQUFXLEVBQUUsbUJBQW1CO3dCQUNoQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxZQUFZO3FCQUd2RDtvQkFDRCxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtvQkFDckMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLGlCQUFpQixDQUFDO29CQUN0QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLGVBQWUsRUFBQyxDQUFDLGFBQWEsRUFBQyxXQUFXLENBQUM7aUJBQzVDOztJQUtELG9CQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0FKWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQ29tcG9uZW50LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TGlzdGluZ0NvbXBvbmVudCwgQ29uZmlybWRpYWxvZyxCb3R0b21TaGVldH0gZnJvbSAnLi9saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbG1vZHVsZXMnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuLy9pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Jztcbi8vaW1wb3J0IHsgTXlmcm9tQ29tcG9uZW50IH0gZnJvbSAnLi9teWZyb20vbXlmcm9tLmNvbXBvbmVudCc7XG4vL2ltcG9ydCB7RHluYW1pY0ZpZWxkRGlyZWN0aXZlfSBmcm9tIFwiLi9teWZyb20vZHluYW1pYy1maWVsZC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IE1hdEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdhbmd1bGFyLW1hdGVyaWFsLWZpbGV1cGxvYWQnO1xuaW1wb3J0IHtOZ3hVcGxvYWRlck1vZHVsZX0gZnJvbSBcIm5neC11cGxvYWRlclwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi9teWZyb20vZmllbGQuaW50ZXJmYWNlJztcbi8vIGltcG9ydCB7IER5bmFtaWNGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vbXlmcm9tL2R5bmFtaWMtZmllbGQuZGlyZWN0aXZlJztcbi8vIGltcG9ydCB7IER5bmFtaWNGb3JtQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9keW5hbWljLWZvcm0tYnVpbGRlci5jb21wb25lbnQnO1xuLypcbmltcG9ydCB7IEZpZWxkQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9maWVsZC1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRCb3hDb21wb25lbnQgfSBmcm9tICcuLi9saWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvdGV4dGJveCc7XG5pbXBvcnQgeyBEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9kcm9wZG93bic7XG5pbXBvcnQgeyBGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2ZpbGUnO1xuaW1wb3J0IHsgQ2hlY2tCb3hDb21wb25lbnQgfSBmcm9tICcuLi9saWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvY2hlY2tib3gnO1xuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi9saWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvcmFkaW8nO1xuKi9cblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xpc3RpbmdDb21wb25lbnQsQ29uZmlybWRpYWxvZyxCb3R0b21TaGVldCxcbiAgLyogIEZpZWxkQnVpbGRlckNvbXBvbmVudCxcbiAgICBUZXh0Qm94Q29tcG9uZW50LFxuICAgIERyb3BEb3duQ29tcG9uZW50LFxuICAgIENoZWNrQm94Q29tcG9uZW50LFxuICAgIEZpbGVDb21wb25lbnQsXG4gICAgUmFkaW9Db21wb25lbnQqL10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBNYXRGaWxlVXBsb2FkTW9kdWxlLCBOZ3hVcGxvYWRlck1vZHVsZSwgUm91dGVyTW9kdWxlLFxuICAgICAgICAvLyBEeW5hbWljRmllbGREaXJlY3RpdmUsXG5cbiAgICBdLFxuICAgIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdLFxuICBleHBvcnRzOiBbTGlzdGluZ0NvbXBvbmVudCxcbiAgICAgIC8vTXlmcm9tQ29tcG9uZW50LFxuICAgICAgTmd4VXBsb2FkZXJNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOltDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0XSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ01vZHVsZSB7XG4gIC8vIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgLy8gZ3JvdXA6IEZvcm1Hcm91cDtcblxufVxuIl19