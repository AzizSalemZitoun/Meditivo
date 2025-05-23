import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeditivoLandingComponent } from './meditivo-landing/meditivo-landing.component';
import { SessionComponent } from './session/session.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ExploreComponent } from './explore/explore.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { User } from './models/user';
const routes: Routes = [
  { path: '', component: MeditivoLandingComponent },
  {path: 'session',component:SessionComponent},
  
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'explore',component:ExploreComponent},
  {path:'profile',component:UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
