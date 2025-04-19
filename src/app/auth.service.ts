import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  login(): void {
    this.cookieService.set('loggedIn', 'true', undefined, '/');
  }

  logout(): void {
    this.cookieService.delete('loggedIn', '/');
  }

  isLoggedIn(): boolean {
    return this.cookieService.get('loggedIn') === 'true';
  }
}