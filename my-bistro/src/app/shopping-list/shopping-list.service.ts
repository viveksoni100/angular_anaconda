import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingridientAddedFlag = false;

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredientAddedStatus() {
    return this.ingridientAddedFlag;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  setAddIngredientToTrue(flag: boolean) {
    this.ingridientAddedFlag = flag;
  }

}
