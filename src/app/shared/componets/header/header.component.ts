import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit , AfterViewInit} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { NavService } from '../../services/nav.service';
import { SidebarRightService } from '../../services/sidebar-right.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  layoutSubscription: Subscription;
  public isCollapsed = true;

  constructor(
    private sidebarRightservice: SidebarRightService,
    public navServices: NavService,
  ) {
    this.layoutSubscription = sidebarRightservice.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;

      }
    )
  }

  ngOnInit(): void {
    let navbarForm:any = document.querySelector('.navbar-form')
    navbarForm.addEventListener('click',(event:any)=>{
      event.preventDefault();
      return;
    }, {passive: false})
  }
  toggleSidebarNotification() {
    this.sidebarRightservice.emitSidebarNotifyChange(true);
  }
  toggleSidebarOpen(){
    if ((this.navServices.collapseSidebar = true)) {
      let mainBody:any = document.querySelector('.main-body')
      mainBody.classList.add('sidenav-toggled');
    }
  }
  toggleSidebarClose(){
    if ((this.navServices.collapseSidebar = true)) {
      let removeMainBody:any = document.querySelector('.main-body')
      removeMainBody.classList.remove('sidenav-toggled');
    }
  }

  search(){
    let navabarForm:any = document.querySelector('.navbar-form ')
    navabarForm.classList.toggle('d-none')
  }
  close(){
    let navbarD:any = document.querySelector('.navbar-form ')
    navbarD.classList.add('d-none')
  }

  ngAfterViewInit(){
    
    const chat:any = document.querySelector('.chat-scroll');
    let ps1 = new PerfectScrollbar(chat,{
      wheelPropagation: false,
      wheelSpeed :2,
      suppressScrollX:true
    });

    const notification:any  = document.querySelector('.Notification-scroll');
    let ps2 = new PerfectScrollbar(notification,{
      wheelPropagation: false,
      wheelSpeed :2,
      suppressScrollX:true
    });
  }

}
