import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetailsService } from '../services/recipe-details.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
})
export class RecipeDetailsComponent {
  recipeName: string | null = '';
  selectedRecipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeDetailsService: RecipeDetailsService
  ) {}
  ngOnInit(): void {
    this.recipeName = this.route.snapshot.paramMap.get('name');
    if (this.recipeName) {
      this.fetchRecipeDetails(this.recipeName);
    }
  }
  fetchRecipeDetails(name: string) {
    this.recipeDetailsService.getRecipeDetails(name).subscribe(
      (recipe) => {
        this.selectedRecipe = recipe;
      },
      (error) => {
        console.error('Error fetching recipe details:', error);
      }
    );
  }
  getIngredients(): string[] {
    if (!this.selectedRecipe?.ingredients) return [];
    // Remove brackets and split by comma
    return this.selectedRecipe.ingredients
      .replace('[', '')
      .replace(']', '')
      .split(',')
      .map((item: string) => item.trim());
  }

  // Helper method for image URL
  getImageUrl(imagePath: string): string {
    return `http://localhost:9001/recipes${imagePath}`;
  }
}
