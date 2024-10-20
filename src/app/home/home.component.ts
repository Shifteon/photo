import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ImageComponent } from '../image/image.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { DomSanitizer } from '@angular/platform-browser';
import { CollectionsService } from '../collections/collections.service';
import { Image } from '../gallery/gallery.service';
import { getRandomImage } from '../utilities/imageUtils';
import { NgClass } from '@angular/common';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgClass,
    NavComponent,
    MatGridListModule,
    MatButtonModule,
    MatCard,
    MatIconModule,
    ImageComponent,
    GalleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  images: Image[] = [];
  interval!: NodeJS.Timeout;
  shouldTransition: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private collectionsService: CollectionsService, private router: Router) {
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/instagram.svg'));
    iconRegistry.addSvgIcon('threads', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/threads.svg'));
  }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    const shuffle = (array: Image[]) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    }; 

    this.images = shuffle(this.collectionsService.getAllImages());
    this.images = this.images.slice(0, this.images.length / 2);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onClickBlogFab() {
    this.router.navigate(['/blog']);
  }
}
