import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeditivoLandingComponent } from './meditivo-landing/meditivo-landing.component';
import { SessionComponent } from './session/session.component';
import { PresetComponent } from './preset/preset.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', component: MeditivoLandingComponent },
  {path: 'session',component:SessionComponent},
  {path:'presets',component:PresetComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
