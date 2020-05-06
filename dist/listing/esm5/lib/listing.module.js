/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent, Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent } from './listing.component';
import { DemoMaterialModule } from './materialmodules';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MomentModule } from 'ngx-moment';
import { RouterModule } from "@angular/router";
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ShowformComponent } from './showform/showform.component';
import { CKEditorModule } from 'ng2-ckeditor';
var ListingModule = /** @class */ (function () {
    function ListingModule() {
    }
    ListingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent],
                    imports: [
                        CommonModule,
                        BrowserModule, BrowserAnimationsModule,
                        DemoMaterialModule,
                        FormsModule, ReactiveFormsModule,
                        RouterModule,
                        MomentModule, CKEditorModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    exports: [ListingComponent, ShowformComponent
                    ],
                    providers: [ApiService],
                    entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent],
                },] }
    ];
    return ListingModule;
}());
export { ListingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDeEgsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHOUM7SUFBQTtJQW1CQSxDQUFDOztnQkFuQkEsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsc0JBQXNCLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsQ0FBQztvQkFDM0ksT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osYUFBYSxFQUFFLHVCQUF1Qjt3QkFDdEMsa0JBQWtCO3dCQUNsQixXQUFXLEVBQUUsbUJBQW1CO3dCQUNoQyxZQUFZO3dCQUNaLFlBQVksRUFBQyxjQUFjO3FCQUc5QjtvQkFDRCxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtvQkFDbkMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCO3FCQUMzQztvQkFDRCxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLGVBQWUsRUFBQyxDQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxpQkFBaUIsQ0FBQztpQkFDdEY7O0lBRUQsb0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQURZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDb21wb25lbnQsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0LFZpZGVvUGxheWVyLEltYWdlVmlldyxTbmFja2JhckNvbXBvbmVudH0gZnJvbSAnLi9saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbG1vZHVsZXMnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTW9tZW50TW9kdWxlIH0gZnJvbSAnbmd4LW1vbWVudCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtZb3V0dWJlcGxheWVyQ29tcG9uZW50fSBmcm9tICcuL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hvd2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL3Nob3dmb3JtL3Nob3dmb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ25nMi1ja2VkaXRvcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtMaXN0aW5nQ29tcG9uZW50LENvbmZpcm1kaWFsb2csQm90dG9tU2hlZXQsWW91dHViZXBsYXllckNvbXBvbmVudCxWaWRlb1BsYXllcixJbWFnZVZpZXcsU25hY2tiYXJDb21wb25lbnQsU2hvd2Zvcm1Db21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBCcm93c2VyTW9kdWxlLCBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBNb21lbnRNb2R1bGUsQ0tFZGl0b3JNb2R1bGVcbiAgICAgICAgXG5cbiAgICBdLFxuICAgIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdLFxuICAgIGV4cG9ydHM6IFtMaXN0aW5nQ29tcG9uZW50LFNob3dmb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6W0NvbmZpcm1kaWFsb2csQm90dG9tU2hlZXQsVmlkZW9QbGF5ZXIsSW1hZ2VWaWV3LFNuYWNrYmFyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ01vZHVsZSB7XG59XG4iXX0=