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
  templateColumns = "1fr 1fr";

  constructor(private galleryService: GalleryService, private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    if (!this.inputImages) {
      this.getImages();
      this.galleryService.$imagesFetched.subscribe(() => {
        this.getImages();
      });
    } else {
      this.images = this.inputImages;
      this.setupColumns();
    }
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 800px)');
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isSmallScreen = this.breakPointObserver.isMatched('(max-width: 800px)');
  }

  private async getImages() {
    this.images = await this.galleryService.getAllImages();
    this.setupColumns();
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
