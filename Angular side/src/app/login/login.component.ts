import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
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
    private router: Router,
    private userService: UserService
  ) {}

  onSubmit(): void {
  const credentials = {
    email: this.user.email,
    password: this.user.password
  };

  this.userService.signin(credentials).subscribe(
    (response) => {
      console.log('User signed in successfully!', response);
      alert('User signed in successfully!');

      localStorage.setItem('token', response.token);
      this.router.navigate(['/explore']);
    },
    (error) => {
      console.error('Error signin user:', error);
      alert('Failed signin.');
    }
  );
}
}