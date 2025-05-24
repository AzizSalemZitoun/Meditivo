import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username: string = '';
  email: string = '';
  

  constructor(private authService: AuthService,private userService: UserService, private router:Router ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    interface JwtPayload {
      sub: string; // The user ID stored as string in token
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const userIdStr = decoded.sub;

      if (!userIdStr) {
        console.error('User ID not found in token');
        return;
      }

      const userId = Number(userIdStr);
      if (isNaN(userId)) {
        console.error('User ID is not a valid number');
        return;
      }

      this.userService.getUserById(userId).subscribe({
        next: (user) => {
          this.username = user.username;
          this.email = user.email;
        },
        error: (err) => console.error('Error loading user profile', err)
      });
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }

  deleteAccount() {
    if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to delete your account.');
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const userIdStr = decoded.sub;

      if (!userIdStr) {
        alert('User ID not found in token.');
        return;
      }

      const userId = Number(userIdStr);
      if (isNaN(userId)) {
        alert('User ID in token is invalid.');
        return;
      }

      this.userService.deleteUser(userId).subscribe({
        next: () => {
          alert('Account deleted successfully.');
          localStorage.clear();
          window.location.href = '/';
        },
        error: (err) => {
          console.error('Error deleting account', err);
          alert('Failed to delete account.');
        }
      });
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }
  logout() {
  this.authService.logout();
  this.router.navigate(['/login']).then(() => {
    window.location.reload();
  });
}
}
