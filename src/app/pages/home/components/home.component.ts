import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedCategory: string = 'Breakfast'; // Default to show all items
  
  menuItems = [
    { name: 'Pancakes', category: 'Breakfast', price: 5.00, image: 'breakfast/pancake.png' },
    { name: 'Omelette', category: 'Breakfast', price: 6.50, image: 'breakfast/omlette.png' },
    { name: 'Croissant', category: 'Breakfast', price: 15.00, image: 'breakfast/croissant.png' },
    { name: 'Sweet Potato', category: 'Breakfast', price: 25.00, image: 'breakfast/sweetpotato.png' },

    { name: 'Pizza', category: 'Lunch', price: 10.00, image: 'img/pizza.png' },
    { name: 'Chips', category: 'Lunch', price: 10.00, image: 'lunch/chips.png' },
    { name: 'Chapati', category: 'Lunch', price: 10.00, image: 'lunch/chapati.png' },


    { name: 'Italian Sauce Mushroom', category: 'Lunch', price: 19.00, image: 'img/italian-sauce.png' },
    { name: 'Chicken Chimichurri', category: 'Dinner', price: 33.15, image: 'img/chicken-chimichurri.png' },
    { name: 'Jollof Rice', category: 'Dinner', price: 22.63, image: 'img/Jollof-rice.png' },
    { name: 'Bavette Steak', category: 'Dinner', price: 22.63, image: 'dinner/Bavette-Steak.png' },
    { name: 'Mashed Potatoes', category: 'Dinner', price: 25.63, image: 'dinner/mashed-potatoes.png' },


    { name: 'Smoothie', category: 'Drinks', price: 4.00, image: 'drinks/smoothie.png' },
    { name: 'Coffee', category: 'Drinks', price: 5.00, image: 'drinks/coffee.png' },
    { name: 'Whiskey', category: 'Drinks', price: 13.00, image: 'drinks/Whiskey.png' },
    { name: 'Beer', category: 'Drinks', price: 3.00, image: 'drinks/beer.png' },


  ];

  galleryPhotos = [
    'gallery/champagne.png',
    'gallery/coffee-cake.png',
    'gallery/snacks.png',
    'gallery/whiskey.png',
    'gallery/melodie.png',
    'gallery/pork-belly.png',
  ];
    // Filter items based on selected category
    get filteredMenuItems() {
      return this.menuItems.filter(item => item.category === this.selectedCategory);
    }
  
    selectCategory(category: string) {
      this.selectedCategory = category;
    }
}
