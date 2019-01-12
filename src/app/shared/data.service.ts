import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sub = new Subject<any>();
  public emitter = this.sub.asObservable();

  display(type, message) {
    this.sub.next({ type, message });
  }
}
