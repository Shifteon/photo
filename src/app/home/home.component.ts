import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { Router } from '@angular/router';
import { ImageComponent } from '../image/image.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    ImageComponent,
    GalleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router) {
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/instagram.svg'));
    iconRegistry.addSvgIcon('threads', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/threads.svg'));
  }

  onClickBlogFab() {
    this.router.navigate(['/blog']);
  }
}
