import {Component, EventEmitter, Output} from '@angular/core';
import {RecipesItemComponent} from "./recipes-item/recipes-item.component";
import {Recipe} from "../recipe.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipesItemComponent, CommonModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Samosa','Paneer Samosa', 'https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.jpg?s=612x612&w=0&k=20&c=Ne0ArOpa-4L2N-INtPnq371fFZoM6qWW6R4ryN9TWW0='),
    new Recipe('Vadapav','Bombay Vadapav', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LwQ4cgMRH-elYUgCunOYaEae1znx7LVTZmIv_tdQiw&s'),
    new Recipe('Springroll','Cheese Springroll', 'https://www.nestleprofessional.in/sites/default/files/2022-05/Vegetable-Spring-Roll_0.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
