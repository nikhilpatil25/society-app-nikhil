import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail/mail.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailSettingsComponent } from './mail-settings/mail-settings.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { ChatComponent } from './chat/chat.component';
import { MailRoutingModule } from './mail-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [MailComponent, MailComposeComponent, MailSettingsComponent, ReadMailComponent, ChatComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ]
})
export class MailModule { }
