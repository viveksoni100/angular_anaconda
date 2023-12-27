import { Component } from '@angular/core';
import {RecipesItemComponent} from "./recipes-item/recipes-item.component";

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipesItemComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {

}
