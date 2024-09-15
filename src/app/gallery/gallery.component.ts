import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  @Input() inputImages!: Image[];
  @Input() numColumns: number = 2;
  columns: Image[][] = [];
  images: Image[] = [];
  innerWidth!: number;
  isSmallScreen: boolean = false;
  templateColumns = "1fr";

  constructor(private galleryService: GalleryService, private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 800px)');
    if (!this.inputImages) {
      this.getImages();
      this.galleryService.$imagesFetched.subscribe(() => {
        this.getImages();
      });
    } else {
      this.setImages(this.inputImages);
    }
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 800px)');
  }

  private async getImages() {
    const galleryImages = await this.galleryService.getAllImages();
    this.setImages(galleryImages);
  }

  private setImages(images: Image[]) {
    this.images = images;
    if (!this.isSmallScreen) {
      this.setupColumns();
    } else {
      // we only display one column on small screens. this will make sure the order of the images is preserved
      this.columns = [this.images];
    }
  }

  private setupColumns() {
    this.templateColumns = "1fr ".repeat(this.numColumns);
    this.columns = [];
    while (this.columns.length < this.numColumns) {
      this.columns.push([]);
    }
    let colNum = 0;
    for (const image of this.images) {
      this.columns[colNum % this.numColumns].push(image);
      colNum++;
    }
  }
}
