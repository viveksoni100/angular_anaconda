import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowedNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = 'Testserver';
  username: '';
  isUsernameEmpty = false;
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server ' + this.serverName + ' is on';
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = event.target.value;
  }

  onUsernameEdit(event: any) {
    if (event.target.value.length > 0) {
      this.isUsernameEmpty = true;
    }
  }

  resetUsername() {
    this.username = '';
  }
}
