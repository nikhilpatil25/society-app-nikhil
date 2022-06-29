import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//MenuBar
export interface HorizontalMenu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: HorizontalMenu[];
}

@Injectable({
  providedIn: 'root'
})
export class HorizontalNavService {

  constructor() { }


  MENUITEMS: HorizontalMenu[] = [
    {
      path: '/dashboard', title: 'Dashboard', type: 'link', icon: 'dashboard', active: true
    },
    {
      title: 'Charts', icon: 'assessment', type: 'sub', active: false,
      children: [
        { path: '/charts/apex', title: 'Apex Chart', type: 'link', active: false },
        { path: '/charts/chartjs', title: 'Chartjs Chart', type: 'link', active: false },
        { path: '/charts/chartlist', title: 'Chartlist Chart', type: 'link', active: false },
        { path: '/charts/echarts', title: 'Echart Chart', type: 'link', active: false },
      ]
    },
    {
      title: 'E-Commerce', icon: 'shopping_basket', type: 'sub', active: false,
      children: [
        { path: '/ecommerce/products', title: 'Products', type: 'link' },
        { path: '/ecommerce/products-details', title: 'Products Details', type: 'link' },
        { path: '/ecommerce/cart', title: 'Cart', type: 'link' }
      ]
    },
    {
      title: 'Elements', type: 'sub', icon: 'layers', active: false,
      children: [
        { path: '/elements/alerts', title: 'Alerts', type: 'link', active: false },
        { path: '/elements/avatar', title: 'Avatar', type: 'link', active: false },
        { path: '/elements/breadcrumbs', title: 'Breadcrumbs', type: 'link', active: false },
        { path: '/elements/buttons', title: 'Buttons', type: 'link', active: false },
        { path: '/elements/badge', title: 'Badge', type: 'link', active: false },
        { path: '/elements/dropdown', title: 'Dropdown', type: 'link', active: false },
        { path: '/elements/thumbnails', title: 'Thumbnails', type: 'link', active: false },
        { path: '/elements/listgroup', title: 'List Group', type: 'link', active: false },
        { path: '/elements/navigation', title: 'Navigation', type: 'link', active: false },
        { path: '/elements/images', title: 'Images', type: 'link', active: false },
        { path: '/elements/pagination', title: 'Pagination', type: 'link', active: false },
        { path: '/elements/popover', title: 'Popover', type: 'link', active: false },
        { path: '/elements/progress', title: 'Progress', type: 'link', active: false },
        { path: '/elements/spinners', title: 'Spinners', type: 'link', active: false },
        { path: '/elements/mediaobject', title: 'Media Object', type: 'link', active: false },
        { path: '/elements/typography', title: 'Typography', type: 'link', active: false },
        { path: '/elements/tooltip', title: 'Tooltip', type: 'link', active: false },
        { path: '/elements/toast', title: 'Toast', type: 'link', active: false },
        { path: '/elements/tags', title: 'Tags', type: 'link', active: false },
        { path: '/elements/tabs', title: 'Tabs', type: 'link', active: false },
      ]
    },
    {
      title: "Apps", icon:'palette', type: 'sub', active: false,
      children:[
        { path: '/apps/cards', title: 'Cards', type: 'link', active: false },
        { path: '/apps/darggablecards', title: 'Darggablecards', type: 'link', active: false },
        { path: '/apps/rangeslider', title: 'Range-slider', type: 'link', active: false },
        { path: '/apps/calendar', title: 'Calendar', type: 'link', active: false },
        { path: '/apps/contacts', title: 'Contacts', type: 'link', active: false },
        { path: '/apps/notification', title: 'Notification', type: 'link', active: false },
        { path: '/apps/widgetnotification', title: 'Widget-notification', type: 'link', active: false },
        { path: '/apps/treeview', title: 'Treeview', type: 'link', active: false },

        {
          path: '/icons', title: 'Icons', type: 'link', icon: 'sentiment_satisfied_alt', active: false
        },
        {
          title: 'Maps', type: 'sub', active: false,
          children: [
        { path: '/maps/leafletmaps', title: 'Leaflet Maps', type: 'link', active: false },
          ]
        },
        {
          title: 'Tables', type: 'sub', active: false,
          children: [
            { path: '/tables/basictables', title: 'Basic Tables', type: 'link', active: false },
        { path: '/tables/datatables', title: 'Data Tables', type: 'link', active: false },
          ]
        },
      ]
    },
    {
      title: 'Advanced UI', icon: 'palette', type: 'sub', active: false,
      children: [
        { path: '/advanced/accordion', title: 'Accordion', type: 'link', active: false },
        { path: '/advanced/carousel', title: 'Carousel', type: 'link', active: false },
        { path: '/advanced/collapse', title: 'Collapse', type: 'link', active: false },
        { path: '/advanced/modals', title: 'Modals', type: 'link', active: false },
        { path: '/advanced/timeline', title: 'Timeline', type: 'link', active: false },
        { path: '/advanced/sweet-alert', title: 'Sweet Alert', type: 'link', active: false },
        { path: '/advanced/ratings', title: 'Ratings', type: 'link', active: false },
        { path: '/advanced/search', title: 'Search', type: 'link', active: false },
        { path: '/advanced/userlist', title: 'Userlist', type: 'link', active: false },
        { path: '/advanced/blog', title: 'Blog', type: 'link', active: false },
      ]
    },
    {
      title: 'Utilities', icon: 'camera', type: 'sub', active: false,
      children: [
        { path: '/utilities/background', title: 'Background', type: 'link', active: false },
        { path: '/utilities/border', title: 'Border', type: 'link', active: false },
        { path: '/utilities/display', title: 'Display', type: 'link', active: false },
        { path: '/utilities/flex', title: 'Flex', type: 'link', active: false },
        { path: '/utilities/height', title: 'Height', type: 'link', active: false },
        { path: '/utilities/margin', title: 'Margin', type: 'link', active: false },
        { path: '/utilities/padding', title: 'Padding', type: 'link', active: false },
        { path: '/utilities/position', title: 'Position', type: 'link', active: false },
        { path: '/utilities/width', title: 'Width', type: 'link', active: false },
        { path: '/utilities/extras', title: 'Extras', type: 'link', active: false },
      ]
    },
    {
      title: 'Pages', icon: 'menu_book', type: 'sub', active: false,
      children: [
        { path: '/pages/profile', title: 'Profile', type: 'link', active: false },
        { path: '/pages/editprofile', title: 'Edit-Profile', type: 'link', active: false },
        { path: '/pages/invoice', title: 'Invoice', type: 'link', active: false },
        { path: '/pages/pricing', title: 'Pricing', type: 'link', active: false },
        { path: '/pages/gallery', title: 'Gallery', type: 'link', active: false },
        { path: '/pages/todotask', title: 'Todotask', type: 'link', active: false },
        { path: '/pages/faqs', title: 'Faqs', type: 'link', active: false },
        { path: '/pages/emptypage', title: 'Empty Page', type: 'link', active: false },
        {
          title: 'Mail', icon: 'question_answer', type: 'sub', active: false,
          children: [
            { path: '/mail/mail', title: 'Mail', type: 'link', active: false },
            { path: '/mail/mail-compose', title: 'Mail Compose', type: 'link', active: false },
            { path: '/mail/read-mail', title: 'Read-mail', type: 'link', active: false },
            { path: '/mail/mail-settings', title: 'Mail-settings', type: 'link', active: false },
            { path: '/mail/chat', title: 'Chat', type: 'link', active: false },
          ]
        },
        {
          title: 'Form', icon: 'description', type: 'sub', active: false,
          children: [
            { path: '/form/form-elements', title: 'Form Elements', type: 'link', active: false },
            { path: '/form/advanced-form', title: 'Advanced Forms', type: 'link', active: false },
            { path: '/form/form-layouts', title: 'Form Layouts', type: 'link', active: false },
            { path: '/form/form-validation', title: 'Form Validation', type: 'link', active: false },
            { path: '/form/form-wizards', title: 'Form Wizards', type: 'link', active: false },
            { path: '/form/form-editors', title: 'Form Editor', type: 'link', active: false },
          ]
        },
      ]

    },
    {
      path: '/widgets', title: 'Widgets', type: 'link', icon: 'widgets', badgeClass: 'warning', badgeValue: 'Hot', active: false
    },
    {
      title: 'Custom Pages', icon: 'lock', type: 'sub', active: false,
      children: [
        { path: '/custompages/sign-in', title: 'Sign In', type: 'link', active: false },
        { path: '/custompages/sign-up', title: 'Sign Up', type: 'link', active: false },
        { path: '/custompages/forgot-password', title: 'Forgot Password', type: 'link', active: false },
        { path: '/custompages/reset-password', title: 'Reset Password', type: 'link', active: false },
        { path: '/custompages/lock-screen', title: 'Lockscreen', type: 'link', active: false },
        { path: '/custompages/underconstruction', title: 'UnderConstruction', type: 'link', active: false },
        { path: '/custompages/404-Error', title: '404 Error', type: 'link', active: false },
        { path: '/custompages/500-Error', title: '500 Error', type: 'link', active: false },
      ]
    },



  ];

  //array
  items = new BehaviorSubject<HorizontalMenu[]>(this.MENUITEMS);


}
