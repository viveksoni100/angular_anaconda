import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-success-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css',
  styles: [`
    .my-custom-class {
        color: white;
    }
  `]
})
export class SuccessAlertComponent {

}
