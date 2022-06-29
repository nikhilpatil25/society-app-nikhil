import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ModalsComponent } from './modals/modals.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SearchComponent } from './search/search.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BlogComponent } from './blog/blog.component';
import { AdvancedRoutingModule } from './advanced-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [AccordionComponent, CarouselComponent, CollapseComponent, ModalsComponent, TimelineComponent, SweetAlertComponent, RatingsComponent, SearchComponent, UserlistComponent, BlogComponent],
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SweetAlert2Module,
    CarouselModule
  ]
})
export class AdvancedUiModule { }
