import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class MyfirebaseService {

  constructor() { }


getUserFromDatabase(uid) {
  const ref = firebase.database().ref('users/' + uid);
  return ref.once('value')
  .then(snapshot => snapshot.val());
}

getDataFromServerApplication() {
  const ref = firebase.database().ref('count');
  return ref.once('value')
  .then(snapshot => snapshot.val());
}

}
