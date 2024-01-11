import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Butter Vadapav',
      'Special Bombay butter vadapav',
      'https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=Yy3pm53KrPAnZXL9weCJDzXjxa2My34oVFx7RBCPmZ8=',
      [
        new Ingredient('Potato', 1),
        new Ingredient('Chilly', 1)
      ]),
    new Recipe('Samosa',
      'Spicy chinese samosa',
      'https://vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg',
      [
        new Ingredient('Potato', 2),
        new Ingredient('Noodles', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
