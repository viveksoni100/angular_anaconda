import {Component} from '@angular/core';
import {ServerComponent} from "./server/server.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
