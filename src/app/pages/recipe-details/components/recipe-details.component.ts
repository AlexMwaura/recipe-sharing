import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  recipeName: string | null = '';
  selectedRecipe: any;
  menuItems = [
    { name: 'Pancakes', category: 'Breakfast', price: 5.00, image: 'breakfast/pancake.png', ingredients: ['Flour', 'Eggs', 'Milk'], time: '20 min', method: 'Mix ingredients and cook on a pan.' },
    // Add other items here
  ];
constructor(private route: ActivatedRoute) { }
ngOnInit(): void {
  this.recipeName = this.route.snapshot.paramMap.get('name');
  this.selectedRecipe = this.menuItems.find(item => item.name === this.recipeName);
}
}
