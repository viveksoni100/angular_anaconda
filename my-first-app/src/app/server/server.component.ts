import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
