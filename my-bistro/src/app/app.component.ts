import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipesListComponent} from "./recipes/recipes-list/recipes-list.component";
import {RecipesItemComponent} from "./recipes/recipes-list/recipes-item/recipes-item.component";
import {RecipesDetailComponent} from "./recipes/recipes-detail/recipes-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, RecipesComponent, RecipesListComponent,
    RecipesItemComponent, RecipesDetailComponent, ShoppingListComponent, ShoppingEditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-bistro';
  loadedFeature = 'shopping-list';

  onNavigate(feature: string) {
    console.log('loaded feature ::: ', feature);
    this.loadedFeature = feature;
  }
}
