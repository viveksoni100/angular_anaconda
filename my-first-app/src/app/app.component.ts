import {Component} from '@angular/core';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from "./servers/servers.component";
import {SuccessAlertComponent} from "./success-alert/success-alert.component";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServerComponent, ServersComponent, SuccessAlertComponent, WarningAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
