import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { CardsComponent } from "./cards/cards.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { DarggablecardsComponent } from "./darggablecards/darggablecards.component";
import { NotificationComponent } from "./notification/notification.component";
import { RangesliderComponent } from "./rangeslider/rangeslider.component";
import { TreeviewComponent } from "./treeview/treeview.component";
import { WidgetNotificationComponent } from "./widget-notification/widget-notification.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'calendar',
                component: CalendarComponent
            },
            {
                path: 'cards',
                component: CardsComponent
            },
            {
                path: 'contacts',
                component: ContactsComponent
            },
            {
                path: 'darggablecards',
                component: DarggablecardsComponent
            },
            {
                path: 'notification',
                component: NotificationComponent
            },
            {
                path: 'rangeslider',
                component: RangesliderComponent
            },
            {
                path: 'treeview',
                component: TreeviewComponent
            },
            {
                path: 'widgetnotification',
                component: WidgetNotificationComponent
            }   
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppsRoutingModule {}