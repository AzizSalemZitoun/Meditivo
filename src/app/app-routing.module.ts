import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeditivoLandingComponent } from './meditivo-landing/meditivo-landing.component';

const routes: Routes = [
  { path: '', component: MeditivoLandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
