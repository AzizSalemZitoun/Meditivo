import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeditivoLandingComponent } from './meditivo-landing/meditivo-landing.component';
import { SessionComponent } from './session/session.component';
import { SoundSelectionComponent } from './sound-selection/sound-selection.component';
import { TimerComponent } from './timer/timer.component';
import { PresetComponent } from './preset/preset.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    MeditivoLandingComponent,
    HeaderComponent,
    SessionComponent,
    SoundSelectionComponent,
    TimerComponent,
    PresetComponent,
    UserProfileComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
