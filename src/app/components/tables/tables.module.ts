import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTablesComponent } from './basic-tables/basic-tables.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [BasicTablesComponent, DataTablesComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    NgbModule,
    NgxDatatableModule
  ]
})
export class TablesModule { }
