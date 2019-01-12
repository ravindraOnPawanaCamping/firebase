import { EventEmitter } from '@angular/core';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  statusChange: any = new EventEmitter<any>();
  constructor() { }

  set(userFromDatabase) {
    localStorage.setItem('user', JSON.stringify(userFromDatabase));
    this.statusChange.emit(userFromDatabase);
  }

  getProfile() {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  }
  destroy() {
    localStorage.removeItem('user');
    this.statusChange.emit(null);
  }
}
