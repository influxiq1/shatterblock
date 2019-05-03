/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUk3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7QUFlN0M7SUFBQTtJQTJCQSxDQUFDOztnQkEzQkEsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxXQUFXO3FCQU10QztvQkFDakIsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osYUFBYSxFQUFFLHVCQUF1Qjt3QkFDdEMsa0JBQWtCO3dCQUNsQixXQUFXLEVBQUUsbUJBQW1CO3dCQUNoQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxZQUFZO3FCQUd2RDtvQkFDSCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIsaUJBQWlCLENBQUM7b0JBQ3RCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDdkIsZUFBZSxFQUFDLENBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQztpQkFDNUM7O0lBS0Qsb0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQUpZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0fSBmcm9tICcuL2xpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7RGVtb01hdGVyaWFsTW9kdWxlfSBmcm9tICcuL21hdGVyaWFsbW9kdWxlcyc7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG4vL2ltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBNeWZyb21Db21wb25lbnQgfSBmcm9tICcuL215ZnJvbS9teWZyb20uY29tcG9uZW50Jztcbi8vaW1wb3J0IHtEeW5hbWljRmllbGREaXJlY3RpdmV9IGZyb20gXCIuL215ZnJvbS9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgTWF0RmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItbWF0ZXJpYWwtZmlsZXVwbG9hZCc7XG5pbXBvcnQge05neFVwbG9hZGVyTW9kdWxlfSBmcm9tIFwibmd4LXVwbG9hZGVyXCI7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuL215ZnJvbS9maWVsZC5pbnRlcmZhY2UnO1xuLy8gaW1wb3J0IHsgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9teWZyb20vZHluYW1pYy1maWVsZC5kaXJlY3RpdmUnO1xuLy8gaW1wb3J0IHsgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2R5bmFtaWMtZm9ybS1idWlsZGVyLmNvbXBvbmVudCc7XG4vKlxuaW1wb3J0IHsgRmllbGRCdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIvZmllbGQtYnVpbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dEJveENvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy90ZXh0Ym94JztcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2Ryb3Bkb3duJztcbmltcG9ydCB7IEZpbGVDb21wb25lbnQgfSBmcm9tICcuLi9saWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvZmlsZSc7XG5pbXBvcnQgeyBDaGVja0JveENvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9jaGVja2JveCc7XG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9yYWRpbyc7XG4qL1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTGlzdGluZ0NvbXBvbmVudCxDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0LFxuICAvKiAgRmllbGRCdWlsZGVyQ29tcG9uZW50LFxuICAgIFRleHRCb3hDb21wb25lbnQsXG4gICAgRHJvcERvd25Db21wb25lbnQsXG4gICAgQ2hlY2tCb3hDb21wb25lbnQsXG4gICAgRmlsZUNvbXBvbmVudCxcbiAgICBSYWRpb0NvbXBvbmVudCovXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdEZpbGVVcGxvYWRNb2R1bGUsIE5neFVwbG9hZGVyTW9kdWxlLCBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIC8vIER5bmFtaWNGaWVsZERpcmVjdGl2ZSxcblxuICAgIF0sXG4gIGV4cG9ydHM6IFtMaXN0aW5nQ29tcG9uZW50LFxuICAgICAgLy9NeWZyb21Db21wb25lbnQsXG4gICAgICBOZ3hVcGxvYWRlck1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6W0NvbmZpcm1kaWFsb2csQm90dG9tU2hlZXRdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTW9kdWxlIHtcbiAgLy8gZmllbGQ6IEZpZWxkQ29uZmlnO1xuICAvLyBncm91cDogRm9ybUdyb3VwO1xuXG59XG4iXX0=