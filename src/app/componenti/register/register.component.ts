import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //chiamare authservice
  }
}
