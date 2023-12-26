import {ServerComponent} from "./server/server.component";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {ServersComponent} from "./servers/servers.component";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";
import {SuccessAlertComponent} from "./success-alert/success-alert.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
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
