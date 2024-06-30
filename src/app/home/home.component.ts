import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BlogCardComponent } from '../blog/blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    BlogCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
