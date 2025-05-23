import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
user: User = {
    username: '',
    email: '',
    password: ''
  };

    constructor(
      private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}
onLoginSuccess() {
  this.authService.login();
  this.router.navigate(['/session']);
}onSubmit(): void {
  const credentials = {
    email: this.user.email,
    password: this.user.password
  };

 this.userService.signin(credentials).subscribe({
  next: (response: any) => {
    if (response.token) {
      localStorage.setItem('token', response.token);
      alert('User signed in successfully!');
      this.onLoginSuccess();
    } else {
      alert('Login failed: no token received.');
    }
  },
  error: (err) => {
    console.error('Login error', err);
    alert('Failed signin. Check credentials or account status.');
  }
});
}

}