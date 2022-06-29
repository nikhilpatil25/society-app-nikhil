import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// For Powercharts , Widgets, and Maps
import * as PowerCharts from 'fusioncharts/fusioncharts.vml';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as Maps from 'fusioncharts/fusioncharts.maps';

import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import * as m from 'fusioncharts/fusioncharts.charts';
// Import timeseries
// Pass the fusioncharts library and chart modules
import * as usa from 'fusioncharts/maps/fusioncharts.usa';
import { FormWizardsComponent } from '../form/form-wizards/form-wizards.component';
import { ArchwizardModule } from 'angular-archwizard';

import { FormElementsComponent } from '../form/form-elements/form-elements.component';

import { FormRoutingModule } from '../form/form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {
  DropzoneConfigInterface,
  DropzoneModule,
  DROPZONE_CONFIG,
} from 'ngx-dropzone-wrapper';
import { ToastrModule, ToastrService } from 'ngx-toastr';

FusionChartsModule.fcRoot(FusionCharts, Maps, PowerCharts, usa);

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
};

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    ArchwizardModule,
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    NgbModule,
    FusionChartsModule,
    FormRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    NgxDaterangepickerMd.forRoot(),
    DpDatePickerModule,
    NgSelectModule,
    CKEditorModule,
    AngularMultiSelectModule,
    NgxIntlTelInputModule,
    QuillModule.forRoot(),
    AngularEditorModule,
    HttpClientModule,
    DropzoneModule,
    NgxDropzoneModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    }),
  ],

  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
    ToastrService,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
