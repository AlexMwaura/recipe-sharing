import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuItems = [
    { name: 'Italian Sauce Mushroom', price: 19.00, image: 'assets/menu-item1.jpg' },
    { name: 'Italian Sauce Mushroom', price: 19.00, image: 'assets/menu-item2.jpg' },
    { name: 'Italian Sauce Mushroom', price: 19.00, image: 'assets/menu-item3.jpg' },
    { name: 'Italian Sauce Mushroom', price: 19.00, image: 'assets/menu-item4.jpg' },
  ];

  galleryPhotos = [
    'assets/gallery-photo1.jpg',
    'assets/gallery-photo2.jpg',
    'assets/gallery-photo3.jpg',
    'assets/gallery-photo4.jpg',
    'assets/gallery-photo5.jpg',
    'assets/gallery-photo6.jpg',
  ];
}
