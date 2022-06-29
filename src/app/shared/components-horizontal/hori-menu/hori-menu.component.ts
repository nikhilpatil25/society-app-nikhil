import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HorizontalMenu, HorizontalNavService } from '../../services/horizontal-nav.service';

@Component({
  selector: 'app-hori-menu',
  templateUrl: './hori-menu.component.html',
  styleUrls: ['./hori-menu.component.scss']
})
export class HoriMenuComponent implements OnInit {

  public menuItems!: HorizontalMenu[];
  public url: any;

  constructor(
    private router: Router,
    private horizontalNavService: HorizontalNavService,
    public elRef: ElementRef
  ) {
    this.horizontalNavService.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) { return false; }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) { return false; }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return;
            });
            return;
          });
        }
      })
    })
  }
  

  //Active NavBar State
  setNavActive(item:any) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        let Body:any = document.querySelector('body')
        Body.classList.remove('active')
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  // Click Toggle menu
  toggleNavActive(item:any) {
    if (!item.active) {
      this.menuItems.forEach((a:any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) { return false; }
        a.children.forEach((b:any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }


  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:any){
    if(window.pageYOffset > 60) {
      let element:any = document.querySelector('.sticky');
      element.classList.add('sticky-pin');
    } else {
      let element:any = document.querySelector('.sticky');
      element.classList.remove('sticky-pin');
    }
  }

  NavRemoveToggle() {
    let removeActive:any = document.querySelector('body')
    removeActive.classList.remove('active');
    let removeMenu:any = document.querySelector('body')
    removeMenu.classList.remove('menu-open');
  }


  arrow: boolean = false;

}
