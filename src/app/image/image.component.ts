import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../gallery/gallery.service';
import { CollectionsService } from '../collections/collections.service';
import { getRandomImage } from '../utilities/imageUtils';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent implements OnInit {
  @Input() image!: Image;
  @Input() heightBased = false;
  @Input() showTitle: boolean = true;
  @Input() fitToScreen: boolean = true;
  @Input() randomImage: boolean = false;
  @Input() basic: boolean = false;
  @Input() height: string = "";

  constructor(private collectionsService: CollectionsService) {}

  ngOnInit(): void {
    if (this.randomImage) {
      this.image = getRandomImage(this.collectionsService.getAllImages());
    }
    this.showTitle = this.showTitle && !!this.image.title;
  }
}
