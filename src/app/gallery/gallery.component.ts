import { Component, HostListener, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { GalleryService, Image } from './gallery.service';
import { ImageComponent } from '../image/image.component';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NavComponent,
    ImageComponent,
    LayoutModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  innerWidth!: number;
  isSmallScreen: boolean = false;

  constructor(private galleryService: GalleryService, private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.getImages();
    this.galleryService.$imagesFetched.subscribe(() => {
      this.getImages();
    });
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 800px)');
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 800px)');
  }

  private async getImages() {
    this.images = await this.galleryService.getAllImages();
  }

}
