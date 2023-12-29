import { Component } from '@angular/core';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../shared/ingredient.model";
import {CommonModule} from "@angular/common";
import {LoggingService} from "../service/logging.service";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor(private loggingService: LoggingService) {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.loggingService.log("ingredient added successfully");
    this.ingredients.push(ingredient);
    this.loggingService.logTableUpdated.emit(ingredient.name);
  }
}
