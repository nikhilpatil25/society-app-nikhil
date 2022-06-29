import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileComponent } from './profile/profile.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';


@NgModule({
  declarations: [EditProfileComponent, EmptyPageComponent, GalleryComponent, FaqsComponent, InvoiceComponent, PricingComponent, ProfileComponent, TodotaskComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    GalleryModule.forRoot()
  ]
})
export class PagesModule { }
