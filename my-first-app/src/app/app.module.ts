import {ServerComponent} from "./server/server.component";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  improts: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
