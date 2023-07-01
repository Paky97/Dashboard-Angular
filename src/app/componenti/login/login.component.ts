import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authServices: AuthService) {}
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //chiamare authservice
    this.authServices.signIn(email, password).subscribe((data: any) => {
      console.log(data);
      const expirationDate = new Date(
        new Date().getTime() + data.expressIn + 1000
      );
      this.authServices.createUser(
        data.email,
        data.localId,
        data.idToken,
        expirationDate
      );
      localStorage.setItem('user', JSON.stringify(this.authServices.user));
    });
    form.reset();
  }
}
