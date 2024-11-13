import { Component, OnInit } from '@angular/core';
import { HomeService, MenuItem, Testimonials } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedCategory: string = 'Breakfast'; // Default to show all items
  menuItems: MenuItem[] = [];
  testimonials: Testimonials[] = [];
  currentTestimonialIndex: number = 0;

  constructor(private homeService: HomeService) {}

  galleryPhotos = [
    'gallery/champagne.png',
    'gallery/coffee-cake.png',
    'gallery/snacks.png',
    'gallery/whiskey.png',
    'gallery/melodie.png',
    'gallery/pork-belly.png',
  ];

  ngOnInit() {
    this.loadMenuItems();
    this.loadTestimonials();
    this.startTestimonialRotation();
  }

  loadMenuItems() {
    this.homeService.getAllMenuItems().subscribe(
      (items) => (this.menuItems = items),
      (error) => console.error('Error loading menu items:', error)
    );
  }

  get filteredMenuItems() {
    return this.menuItems.filter(
      (item) => item.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
  getImageUrl(imagePath: string): string {
    return imagePath;
  }
  loadTestimonials() {
    this.homeService.fetchTestimonials().subscribe(
      (data) => (this.testimonials = data),
      (error) => console.error('Error loading testimonials:', error)
    );
  }
    // Method to rotate testimonials every 5 seconds
    startTestimonialRotation() {
      setInterval(() => {
        this.currentTestimonialIndex =
          (this.currentTestimonialIndex + 1) % this.testimonials.length;
      }, 5000);
    }
}
