import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey: string = '';
  isLoggedIn: boolean = true;
  signUpUrl: string = '';
  signInUrl: string = '';
  isAdmin: boolean = true;
  user!: User | null;

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated() {
    return this.isAdmin;
  }
  isRoleAdmin() {
    return this.isAdmin;
  }

  createUser(email: string, id: string, token: string, expirationToken: Date) {
    this.user = new User(email, id, token, expirationToken);
    this.isLoggedIn = true;
  }

  signUp(email: string, password: string) {
    return this.http.post(this.signUpUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
  signIn(email: string, password: string) {
    return this.http.post(this.signInUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
  logOut() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
