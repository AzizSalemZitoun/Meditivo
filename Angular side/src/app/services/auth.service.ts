import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Observable for components to subscribe to login status
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() {}

  login() {
    // Call this after successful login
    this.loggedIn.next(true);
    // Optionally store token/session here
  }

  logout() {
    this.loggedIn.next(false);
    // Clear stored token/session here if any
  }

  // Optional: check if user is already logged in on app start
  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
