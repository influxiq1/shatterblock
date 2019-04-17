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
var ListingModule = /** @class */ (function () {
    function ListingModule() {
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
    return ListingModule;
}());
export { ListingModule };
if (false) {
    /** @type {?} */
    ListingModule.prototype.field;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSWxFO0lBQUE7SUFlQSxDQUFDOztnQkFmQSxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQztvQkFDMUQsT0FBTyxFQUFFO3dCQUNQLGFBQWEsRUFBQyx1QkFBdUI7d0JBQ3JDLGtCQUFrQjt3QkFDbEIsV0FBVyxFQUFDLG1CQUFtQjtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzNCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDdkIsZUFBZSxFQUFDLENBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQztpQkFDNUM7O0lBS0Qsb0JBQUM7Q0FBQSxBQWZELElBZUM7U0FKWSxhQUFhOzs7SUFDeEIsOEJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TGlzdGluZ0NvbXBvbmVudCwgQ29uZmlybWRpYWxvZyxCb3R0b21TaGVldH0gZnJvbSAnLi9saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbG1vZHVsZXMnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4vbGlzdGluZy5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xpc3RpbmdDb21wb25lbnQsQ29uZmlybWRpYWxvZyxCb3R0b21TaGVldF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMaXN0aW5nQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czpbQ29uZmlybWRpYWxvZyxCb3R0b21TaGVldF0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdNb2R1bGUge1xuICBmaWVsZDogRmllbGRDb25maWc7XG4gIC8vIGdyb3VwOiBGb3JtR3JvdXA7XG5cbn1cbiJdfQ==