import { Component, Input } from '@angular/core';
import { Image } from '../gallery/gallery.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input() image!: Image;
  @Input() heightBased = false;
  @Input() showTitle: boolean = true;
}
