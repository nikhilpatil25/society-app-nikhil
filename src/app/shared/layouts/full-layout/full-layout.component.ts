import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mainSidebarOpen: any;
  hoverEffect($event:any) {
    this.mainSidebarOpen = $event.type == 'mouseover' ? 'sidenav-toggled-open' : '';
  }

  clickOnBody(){
    let mainBody:any =document.querySelector('.main-body')
    mainBody.classList.remove('sidenav-toggled')
    let removeMainBody:any = document.querySelector('.sidebar')
    removeMainBody.classList.remove('sidebar-open')
  }
}
