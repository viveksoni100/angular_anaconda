import {Component, ViewChild} from '@angular/core';
import {FormModel} from "./form.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * it is useful when you want form data earlier than it's submit event, for example imposing validations
   */
  @ViewChild('f') signupForm!: NgForm;

  formModel!: FormModel;
  defaultQuestion!: 'pet';
  answer!: '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    // console.log(this.signupForm.value);
    console.log(this.signupForm.value);
  }
}
