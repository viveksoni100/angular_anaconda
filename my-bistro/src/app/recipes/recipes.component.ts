import {Component, OnInit} from '@angular/core';
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";
import {Recipe} from "./recipe.model";
import {CommonModule} from "@angular/common";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipesListComponent, RecipesDetailComponent, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }
}
