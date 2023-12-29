import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipesListComponent} from "./recipes/recipes-list/recipes-list.component";
import {RecipesItemComponent} from "./recipes/recipes-list/recipes-item/recipes-item.component";
import {RecipesDetailComponent} from "./recipes/recipes-detail/recipes-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {DropdownDirective} from "./shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, RecipesComponent, RecipesListComponent, RecipesItemComponent,
    RecipesDetailComponent, ShoppingListComponent, ShoppingEditComponent, DropdownDirective
  ]
})
export class AppModule {
}
