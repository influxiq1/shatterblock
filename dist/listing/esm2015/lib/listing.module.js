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
import { ShowformComponent } from "./showform/showform.component";
//import { ShowformComponent } from './showform/showform.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { MatFileUploadModule } from 'angular-material-fileupload';
export class ListingModule {
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
                    MomentModule, CKEditorModule, MatFileUploadModule
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ListingComponent, ShowformComponent
                ],
                providers: [ApiService],
                entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDeEgsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtCQUErQixDQUFDOztBQUVoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBcUJsRSxNQUFNLE9BQU8sYUFBYTs7O1lBbEJ6QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxzQkFBc0IsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLGlCQUFpQixDQUFDO2dCQUMzSSxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixhQUFhLEVBQUUsdUJBQXVCO29CQUN0QyxrQkFBa0I7b0JBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7b0JBQ2hDLFlBQVk7b0JBQ1osWUFBWSxFQUFDLGNBQWMsRUFBQyxtQkFBbUI7aUJBR2xEO2dCQUNELE9BQU8sRUFBRSxDQUFFLHNCQUFzQixDQUFFO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQyxpQkFBaUI7aUJBQzNDO2dCQUNELFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsZUFBZSxFQUFDLENBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixDQUFDO2FBQ3RGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQ29tcG9uZW50LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TGlzdGluZ0NvbXBvbmVudCwgQ29uZmlybWRpYWxvZyxCb3R0b21TaGVldCxWaWRlb1BsYXllcixJbWFnZVZpZXcsU25hY2tiYXJDb21wb25lbnR9IGZyb20gJy4vbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtEZW1vTWF0ZXJpYWxNb2R1bGV9IGZyb20gJy4vbWF0ZXJpYWxtb2R1bGVzJztcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE1vbWVudE1vZHVsZSB9IGZyb20gJ25neC1tb21lbnQnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7WW91dHViZXBsYXllckNvbXBvbmVudH0gZnJvbSAnLi95b3V0dWJlcGxheWVyL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7U2hvd2Zvcm1Db21wb25lbnR9IGZyb20gXCIuL3Nob3dmb3JtL3Nob3dmb3JtLmNvbXBvbmVudFwiO1xuLy9pbXBvcnQgeyBTaG93Zm9ybUNvbXBvbmVudCB9IGZyb20gJy4vc2hvd2Zvcm0vc2hvd2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmcyLWNrZWRpdG9yJztcbmltcG9ydCB7IE1hdEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdhbmd1bGFyLW1hdGVyaWFsLWZpbGV1cGxvYWQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTGlzdGluZ0NvbXBvbmVudCxDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0LFlvdXR1YmVwbGF5ZXJDb21wb25lbnQsVmlkZW9QbGF5ZXIsSW1hZ2VWaWV3LFNuYWNrYmFyQ29tcG9uZW50LFNob3dmb3JtQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgTW9tZW50TW9kdWxlLENLRWRpdG9yTW9kdWxlLE1hdEZpbGVVcGxvYWRNb2R1bGVcbiAgICAgICAgXG5cbiAgICBdLFxuICAgIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdLFxuICAgIGV4cG9ydHM6IFtMaXN0aW5nQ29tcG9uZW50LFNob3dmb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6W0NvbmZpcm1kaWFsb2csQm90dG9tU2hlZXQsVmlkZW9QbGF5ZXIsSW1hZ2VWaWV3LFNuYWNrYmFyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ01vZHVsZSB7XG59XG4iXX0=