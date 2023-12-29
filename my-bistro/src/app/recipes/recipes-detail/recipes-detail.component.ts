import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipes-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css'
})
export class RecipesDetailComponent {
  @Input() recipe!: Recipe;
  ingridientAddedFlag = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  addToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ing => {
      this.shoppingListService.addIngredient(ing);
      this.shoppingListService.setAddIngredientToTrue(true);
      this.ingridientAddedFlag = this.shoppingListService.getIngredientAddedStatus();
    });
  }
}
