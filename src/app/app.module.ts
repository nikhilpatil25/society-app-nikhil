import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DpDatePickerModule } from 'ng2-date-picker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {
  FormsModule,
  NgSelectOption,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
// import { PagesComponent } from './components/pages/pages.component';
import { ArchwizardModule } from 'angular-archwizard';
import { NgSelectModule } from '@ng-select/ng-select';
// import { NgSelectOption } from '@ng-select/ng-select'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { NgxDropzoneModule } from 'ngx-dropzone';
import {
  DropzoneConfigInterface,
  DropzoneModule,
  DROPZONE_CONFIG,
} from 'ngx-dropzone-wrapper';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { ColorPickerModule } from 'ngx-color-picker';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [AppComponent, AuthenticationComponent],
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    ToastrService,
    QuillModule,
    AngularEditorModule,
    NgxIntlTelInputModule,
    CKEditorModule,
    ColorPickerModule,
    ToastrModule,
    DpDatePickerModule,
    NgxDropzoneModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxDaterangepickerMd,
    NgSelectOption,
    AppRoutingModule,
    HttpClientModule,
    ArchwizardModule,
    DropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    NgbModule,
    HighlightModule,
    NgSelectModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
  ],

  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
    ToastrService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
