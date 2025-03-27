import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    console.log('Submitting user:', this.user); // Log the user object
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log('User added successfully!', response);
        alert('User added successfully!');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error creating user:', error);
        alert('Failed to create user. Please try again.');
      }
    );
  }
}