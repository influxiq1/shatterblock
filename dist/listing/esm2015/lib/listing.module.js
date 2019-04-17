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
export class ListingModule {
}
ListingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ListingComponent, Confirmdialog, BottomSheet],
                imports: [
                    BrowserModule, BrowserAnimationsModule,
                    DemoMaterialModule,
                    FormsModule, ReactiveFormsModule
                ],
                exports: [ListingComponent],
                providers: [ApiService],
                entryComponents: [Confirmdialog, BottomSheet],
            },] }
];
if (false) {
    /** @type {?} */
    ListingModule.prototype.field;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZWxFLE1BQU0sT0FBTyxhQUFhOzs7WUFYekIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxXQUFXLENBQUM7Z0JBQzFELE9BQU8sRUFBRTtvQkFDUCxhQUFhLEVBQUMsdUJBQXVCO29CQUNyQyxrQkFBa0I7b0JBQ2xCLFdBQVcsRUFBQyxtQkFBbUI7aUJBQ2hDO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLGVBQWUsRUFBQyxDQUFDLGFBQWEsRUFBQyxXQUFXLENBQUM7YUFDNUM7Ozs7SUFFQyw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0fSBmcm9tICcuL2xpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7RGVtb01hdGVyaWFsTW9kdWxlfSBmcm9tICcuL21hdGVyaWFsbW9kdWxlcyc7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi9saXN0aW5nLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTGlzdGluZ0NvbXBvbmVudCxDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0xpc3RpbmdDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOltDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0XSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ01vZHVsZSB7XG4gIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgLy8gZ3JvdXA6IEZvcm1Hcm91cDtcblxufVxuIl19