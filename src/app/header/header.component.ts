import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn = false;
name: string;
uid: string;
email: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.statusChange.subscribe(userData => {
      if (userData) {

      console.log(userData);
      this.name = userData.name;
      this.email = userData.email;
      this.uid = userData.uid;
      } else {
        this.name = null;
        this.email = null;
      this.uid = null;
      }
    });
    firebase.auth().onAuthStateChanged(userData =>
    {
      if (userData && userData.emailVerified) {
        this.isLoggedIn = true;
        const user = this.userService.getProfile();
        if (user && user.name) {
          this.name = user.name;
          this.uid = user.uid;
          this.email = user.email;
        }
        this.router.navigate(['/myposts']);
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  onLogout() {
    firebase.auth().signOut()
    .then(() => {
      this.userService.destroy(),
      this.isLoggedIn = false;
      console.log(this.isLoggedIn);
    });
  }

}
