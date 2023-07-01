import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  insertPersona(url: string, body: {}) {
    this.http.post(url, body);
  }
  getPersona(url: string) {
    this.http.get(url + '?auth=' + this.authService.user.token);
  }
}
