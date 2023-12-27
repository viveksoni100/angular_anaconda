import { Component } from '@angular/core';
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipesListComponent, RecipesDetailComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

}
