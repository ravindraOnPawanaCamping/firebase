import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { RouteGuard } from './auth/route-guard';
const routingApp: Routes  = [
    {path: '', component: HomeComponent},
    {path: 'signin', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signout', component: SignOutComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routingApp)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
