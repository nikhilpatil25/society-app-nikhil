import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons/icons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    IconsRoutingModule,
    NgbModule
  ]
})
export class IconsModule { }
