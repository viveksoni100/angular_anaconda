import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() recipe!: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }
}
