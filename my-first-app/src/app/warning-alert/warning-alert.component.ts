import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  standalone: true,
  imports: [],
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css'
})
export class WarningAlertComponent {

  @HostBinding('class.bg-warning-hover') isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
