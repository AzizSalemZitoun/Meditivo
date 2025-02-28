import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meditivo-landing',
  templateUrl: './meditivo-landing.component.html',
  styleUrls: ['./meditivo-landing.component.css']
})
export class MeditivoLandingComponent {
  constructor(private router: Router) { }
}
