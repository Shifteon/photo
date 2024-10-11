import { Component, HostListener, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { EasterEggService } from '../easter-egg/easter-egg.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  iconPath: string = "../../assets/images/turtle.png";
  isHomeActive: boolean = true;
  isBlogActive: boolean = false;
  isCollectionsActive: boolean = false;
  isSmallScreen: boolean = false;

  constructor(private easterEggService: EasterEggService, private router: Router, private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.setActiveRoute();
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 500px)')
    this.easterEggService.$iconPathUpated.subscribe(() => {
      this.iconPath = this.easterEggService.getIconPath();
    });
    // this.router.events.subscribe(() => {
    //   this.setActiveRoute();
    // });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 500px)');
  }

  onHomeClick() {
    this.router.navigate(['/']);
  }

  onBlogButtonClick() {
    this.router.navigate(['/blog']);
  }

  onGalleryButtonClick() {
    this.router.navigate(['/gallery']);
  }

  onCollectionsButtonClick() {
    this.router.navigate(['/collections']);
  }

  private setActiveRoute() {
    this.isHomeActive = this.isRouteActive('/');
    this.isBlogActive = this.isRouteActive('/blog') || this.isRouteActive('/blog-post');
    this.isCollectionsActive = this.isRouteActive('/collections') || this.isRouteActive('/collection');
  }

  private isRouteActive(route: string) {
    return this.router.isActive(route, {paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored'});
  }
}
