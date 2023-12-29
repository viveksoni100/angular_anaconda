import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    console.log(feature);
    this.featureSelected.emit(feature);
  }
}
