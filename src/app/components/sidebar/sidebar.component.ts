import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/profiling', title: 'Profiling',  icon:'ni-active-40 text-yellow', class: '' },
    { path: '/deal', title: 'Deals',  icon:'ni-tag text-blue', class: '' },
    { path: '/brand', title: 'Brands',  icon:'ni-badge text-pink', class: '' },
    { path: '/category', title: 'Categories',  icon:'ni-archive-2 text-orange', class: '' },
    { path: '/product', title: 'Products',  icon:'ni-box-2 text-blue', class: '' },
    { path: '/video', title: 'Videos',  icon:'ni-button-play text-red', class: '' },
    { path: '/article', title: 'Articles',  icon:'ni-paper-diploma text-yellow', class: '' },
    { path: '/user', title: 'Users',  icon:'ni-single-02 text-primary', class: '' },
    { path: '/clinic', title: 'Clinics',  icon:'ni-ambulance text-orange', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
