import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowedNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'server is on';
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = event.target.value;
  }
}
