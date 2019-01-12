import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-like';
  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyA3_U9peZIHizuO0i4sA-rwsuv3dxoDOCc',
      authDomain: 'server-2c4cf.firebaseapp.com',
      databaseURL: 'https://server-2c4cf.firebaseio.com',
      projectId: 'server-2c4cf',
      storageBucket: 'server-2c4cf.appspot.com',
      messagingSenderId: '968500135502'
    };
    firebase.initializeApp(config);

  }
}
