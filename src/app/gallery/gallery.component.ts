import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { GalleryService, Image } from './gallery.service';
import { ImageComponent } from '../image/image.component';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgClass,
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
  @Input() smallScreenColumns: number = 1;
  @Input() showTitles: boolean = false;
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
    this.setIsSmallScreen(this.breakPointObserver.isMatched('(max-width: 800px)'));
  }

  private async getImages() {
    const galleryImages = await this.galleryService.getAllImages();
    this.setImages(galleryImages);
  }

  private setImages(images: Image[]) {
    this.images = images;
    this.setupColumns();
  }

  private setIsSmallScreen(isSmallScreen: boolean) {
    if (isSmallScreen === this.isSmallScreen) {
      return;
    }
    this.isSmallScreen = isSmallScreen;
    this.setupColumns();
  }

  private setupColumns() {
    const numberOfColumns = this.isSmallScreen ? this.smallScreenColumns : this.numColumns;
    this.templateColumns = "1fr ".repeat(numberOfColumns);
    this.columns = [];
    while (this.columns.length < numberOfColumns) {
      this.columns.push([]);
    }
    let colNum = 0;
    for (const image of this.images) {
      this.columns[colNum % numberOfColumns].push(image);
      colNum++;
    }
  }
}
