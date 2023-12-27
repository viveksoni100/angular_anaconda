import {Component} from '@angular/core';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from "./servers/servers.component";
import {SuccessAlertComponent} from "./success-alert/success-alert.component";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServerComponent, ServersComponent, SuccessAlertComponent, WarningAlertComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  servers = ['UAT_Server','PROD_Server', 'DEV_Server'];
  para = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  paraToDisplay = false;
  logClicks = [];

  toggleDisplayOptions() {
    // console.log(this.logClicks);
    if (this.paraToDisplay == false) {
      this.paraToDisplay = true;
      this.logClicks.push('clicked');
    } else {
      this.paraToDisplay = false;
      this.logClicks.push('clicked');
    }
  }
}
