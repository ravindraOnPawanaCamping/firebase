import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { DataService } from '../../shared/data.service';
import { MyfirebaseService } from '../../shared/myfirebase.service';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notifier: DataService,
    private myFire: MyfirebaseService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.pwd;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        userData => {
          if (userData.user.emailVerified) {
            return this.myFire.getUserFromDatabase(userData.user.uid);


          } else {
            const message = 'Yoor email is not verified yet';
            this.notifier.display('error', message);
            firebase.auth().signOut();
          }
        }
      )
      .then(userDataFromDatabase => {
        if (userDataFromDatabase) {
          this.userService.set(userDataFromDatabase);
          this.router.navigate(['/allposts']);
        }
      })
      .catch(err => {
        this.notifier.display('error', err.message);
      });
  }
}
