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

  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }
}
