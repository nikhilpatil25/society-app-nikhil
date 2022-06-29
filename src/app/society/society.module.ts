import { CommonModule } from '@angular/common';
import { AddSocietyComponent } from './add-society/add-society.component';
import { RouterModule, Routes } from '@angular/router';
import { SocietyInfoComponent } from './add-society/society-info/society-info.component';
import { ImpuserpwdComponent } from './add-society/impuserpwd/impuserpwd.component';
import { McinfoComponent } from './add-society/mcinfo/mcinfo.component';
import { StaffinfoComponent } from './add-society/staffinfo/staffinfo.component';
import { VendorinfoComponent } from './add-society/vendorinfo/vendorinfo.component';
import { DocinfoComponent } from './add-society/docinfo/docinfo.component';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FormWizardsComponent } from '../../app/components/form/form-wizards/form-wizards.component';
import { ArchwizardModule } from 'angular-archwizard';

import { FormElementsComponent } from '../../app/components/form/form-elements/form-elements.component';

import { FormRoutingModule } from '../../app/components/form/form-routing.module';
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
const routes: Routes = [{ path: '', component: AddSocietyComponent }];

@NgModule({
  declarations: [
    AddSocietyComponent,

    SocietyInfoComponent,
    ImpuserpwdComponent,
    McinfoComponent,
    StaffinfoComponent,
    VendorinfoComponent,
    DocinfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArchwizardModule,
    CommonModule,
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

  //  providers: [
  //   {
  //     provide: DROPZONE_CONFIG,
  //     useValue: DEFAULT_DROPZONE_CONFIG,
  //   },
  //   ToastrService,
  // ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports: [RouterModule],
})
export class SocietyModule {}
