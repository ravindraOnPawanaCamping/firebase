import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  type: string = null;
  message: string = null;
  constructor(private service: DataService) {
    service.emitter.subscribe(
      data => {
        this.type = data.type;
        this.message = data.message;
        this.reset();
      });

  }
  reset() {
    setTimeout(() => {
      this.type = null;
      this.message = null;
    }, 1000);
  }

  ngOnInit() {
  }

}
