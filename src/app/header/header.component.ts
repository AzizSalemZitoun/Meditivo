import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Variable to track the scroll position
  isScrolled = false;

  ngOnInit(): void {
    // Check initial scroll position when the component loads
    this.checkScroll();
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
