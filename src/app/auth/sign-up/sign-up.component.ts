import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import { DataService } from '../../shared/data.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private service: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const fullName  = form.value.fullname;
    const email = form.value.email;
    const password = form.value.pwd;
    console.log(fullName, email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userData => {
        userData.user.sendEmailVerification();
        const message = `The mail address has been sent on ${email} kindly check your inbox and follow the steps
        in verification email`;
        this.service.display('success', message);
        return firebase.database().ref('users/' + userData.user.uid).set({
          email  : email,
          uid: userData.user.uid,
          registrationDate: new Date().toString(),
          name: fullName
        })
        .then(() => {
          firebase.auth().signOut();
        });
    })
    .catch(err => {
      this.service.display('error', err.message);
      console.log(err.message);
    });
  }
}
