import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenusRoutingModule } from './submenus-routing.module';
import { Level1Component } from './level1/level1.component';



@NgModule({
  declarations: [Level1Component],
  imports: [
    CommonModule,
    SubmenusRoutingModule
  ]
})
export class SubmenusModule { }
