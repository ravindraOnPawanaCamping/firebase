import { Component, OnInit } from '@angular/core';
import { MyfirebaseService } from '../shared/myfirebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  array: any;
  data: any;
  id: any;
  string: any;
  count1: any;
  count2: any;
  arr = [];

  constructor( private fire: MyfirebaseService) { }

  ngOnInit() {
    this.fire.getDataFromServerApplication().then(data => {
      console.log(data)
      this.id = data.productid;
      this.count1 = data.count2;
      this.count2 = data.count3;
      console.log({"count2":this.count1,'count3':this.count2});
      this.arr.push(this.count1.string2['-LW7QDdMu9B1M0e96JKL'].split('       '));
      this.arr.push(this.count2.string3['-LW7S9-qHELo_dMDn8eo'].split('       '));  
      console.log({"array":this.arr})
      //this.string = data.count2['string2'];
      //this.array = this.string['-LNR--LW7S9-qHELo_dMDn8eo'].split('       ');
    });
  }

}
