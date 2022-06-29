import { Component, OnInit } from '@angular/core';
import { SidebarRightService } from '../../services/sidebar-right.service';
import { HorizontalNavService } from '../../services/horizontal-nav.service';
import PerfectScrollbar from 'perfect-scrollbar';
@Component({
  selector: 'app-hori-header',
  templateUrl: './hori-header.component.html',
  styleUrls: ['./hori-header.component.scss']
})
export class HoriHeaderComponent implements OnInit {

  public isCollapsed = true;
  public isSidebar = false;
  toggleClass = "fe fe-maximize";
  
  sidebar:boolean| any = document.querySelector('body')
  
  constructor(
    private SidebarRightService: SidebarRightService,
    private horizontalNavService: HorizontalNavService,
  ) { }

  ngOnInit(): void {
  }

  toggleSidebarNotification() {
    this.SidebarRightService.emitSidebarNotifyChange(true);
  }
  toggleSidebar(){
    this.sidebar.classList.value.includes('active');
    if (this.sidebar == !this.sidebar) {
      let BodyActive:any = document.querySelector('body')
      BodyActive.classList.remove('active');
      let BodyMenu:any = document.querySelector('body')
      BodyMenu.classList.remove('menu-open');
    }
    else {
      let BodyMenu:any = document.querySelector('body')
      BodyMenu.classList.add('menu-open');
      let BodyActive:any = document.querySelector('body')
      BodyActive.classList.add('active');
    }
  }
  search(){
    let navForm:any = document.querySelector('.navbar-form ')
    navForm.classList.toggle('d-none')
  }
  close(){
    let navbarForm:any = document.querySelector('.navbar-form ')
    navbarForm.classList.add('d-none')
  }

  ngAfterViewInit(){
    // const sidemenu = document.querySelector('.app-sidebar');
    // let ps = new PerfectScrollbar(sidemenu,{
    //   wheelPropagation: false
    // });

    const chat:any = document.querySelector('.chat-scroll');
    let ps1 = new PerfectScrollbar(chat,{
      wheelPropagation: false
    });

    const notification:any  = document.querySelector('.Notification-scroll');
    let ps2 = new PerfectScrollbar(notification,{
      wheelPropagation: false
    });
  }
}
