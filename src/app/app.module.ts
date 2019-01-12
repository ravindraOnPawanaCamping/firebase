import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignOutComponent } from './sign-out/sign-out.component';
import { FormsModule } from '@angular/forms';
import { RouteGuard } from './auth/route-guard';
import { NotificationComponent } from './notification/notification.component';
/* import { DataService } from './shared/data.service';
import { MyfirebaseService } from './shared/myfirebase.service';
import { UserService } from './shared/user.service'; */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    SignOutComponent,
    NotificationComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [RouteGuard/* , DataService, MyfirebaseService, UserService */],
  bootstrap: [AppComponent]
})
export class AppModule { }
