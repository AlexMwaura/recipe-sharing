import { Component ,OnInit} from '@angular/core';
import { HomeService, MenuItem } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedCategory: string = 'Breakfast'; // Default to show all items
  menuItems: MenuItem[] = [];
  constructor(private menuItemService: HomeService) {}

  


  galleryPhotos = [
    'gallery/champagne.png',
    'gallery/coffee-cake.png',
    'gallery/snacks.png',
    'gallery/whiskey.png',
    'gallery/melodie.png',
    'gallery/pork-belly.png',
  ];
    // // Filter items based on selected category
    // get filteredMenuItems() {
    //   return this.menuItems.filter(item => item.category === this.selectedCategory);
    // }
  
    // selectCategory(category: string) {
    //   this.selectedCategory = category;
    // }
    ngOnInit() {
      this.loadMenuItems();
    }
  
    loadMenuItems() {
      this.menuItemService.getAllMenuItems().subscribe(
        items => this.menuItems = items,
        error => console.error('Error loading menu items:', error)
      );
    }
  
    get filteredMenuItems() {
      return this.menuItems.filter(item => item.category === this.selectedCategory);
    }
  
    selectCategory(category: string) {
      this.selectedCategory = category;
    }
    getImageUrl(imagePath: string): string {
      return `http://localhost:9001/recipes${imagePath}`;
    }
    
}
