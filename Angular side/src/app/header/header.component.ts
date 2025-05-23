import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn = false;

constructor(private authService: AuthService,private router: Router) {}


  // Variable to track the scroll position
  isScrolled = false;

  ngOnInit(): void {
   this.authService.isLoggedIn$.subscribe(status => {
    this.isLoggedIn = status;
  });
    this.checkScroll();
  }
   logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Listen for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  // Check if page is scrolled down
  checkScroll() {
    this.isScrolled = window.pageYOffset > 50; // 50px scroll threshold
  }

}
