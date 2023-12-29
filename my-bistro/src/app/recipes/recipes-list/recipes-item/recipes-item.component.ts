import { Component } from '@angular/core';
import {Recipe} from "../../recipe.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-recipes-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent {
  recipes: Recipe[] = [
    new Recipe('Samosa','Paneer Samosa', 'https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.jpg?s=612x612&w=0&k=20&c=Ne0ArOpa-4L2N-INtPnq371fFZoM6qWW6R4ryN9TWW0='),
    new Recipe('Vadapav','Bombay Vadapav', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LwQ4cgMRH-elYUgCunOYaEae1znx7LVTZmIv_tdQiw&s')
  ];
}
