import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuItems = [
    { name: 'Pizza', price: 10.00, image: 'img/pizza.png' },
    { name: 'Italian Sauce Mushroom', price: 19.00, image: 'img/italian-sauce.png' },
    { name: 'Chicken Chimichurri', price: 33.15, image: 'img/chicken-chimichurri.png' },
    { name: 'Jollof Rice', price: 22.63, image: 'img/Jollof-rice.png' },
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
