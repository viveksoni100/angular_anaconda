import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipesItemComponent} from "./recipes-item/recipes-item.component";
import {Recipe} from "../recipe.model";
import {CommonModule} from "@angular/common";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipesItemComponent, CommonModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
