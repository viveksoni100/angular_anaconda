import {Component, Input} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {CommonModule} from "@angular/common";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipes-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent {
  @Input() recipe!: Recipe;


  constructor(private recipeService: RecipeService) {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
