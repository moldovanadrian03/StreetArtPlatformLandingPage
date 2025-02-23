import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSidenavOpened: boolean = false;

  isMobile() {
    if (this.isBrowser()) {     // not checking for browser will throw 'window is not defined' errors in console
      return window.innerWidth <= 800;
    }
    return true;
  }

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  isBrowser(): boolean {
		return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
	}

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
