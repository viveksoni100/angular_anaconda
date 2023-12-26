import {Component} from '@angular/core';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from "./servers/servers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServerComponent, ServersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
