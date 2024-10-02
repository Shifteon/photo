import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
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
  image!: Image;
  interval!: NodeJS.Timeout;
  shouldTransition: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private changeDetectorRef: ChangeDetectorRef, private collectionsService: CollectionsService, private router: Router, private zone: NgZone) {
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/instagram.svg'));
    iconRegistry.addSvgIcon('threads', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/threads.svg'));
  }

  ngOnInit(): void {
    const shuffle = (array: Image[]) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    }; 

    this.images = shuffle(this.collectionsService.getAllImages());
    this.image = getRandomImage(this.images);
    // this.zone.runOutsideAngular(() => {
    //   this.interval = setInterval(() => {
    //     setTimeout(() => {
    //       this.shouldTransition = true;
    //       this.changeDetectorRef.detectChanges();
    //     }, 9000);
    //     this.shouldTransition = false;
    //     this.image = getRandomImage(this.images);
    //     this.changeDetectorRef.detectChanges();
    //   }, 10000);
    // });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onClickBlogFab() {
    this.router.navigate(['/blog']);
  }
}
