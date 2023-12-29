import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css'
})
export class RecipesDetailComponent {
  @Input() recipe!: Recipe;
}
