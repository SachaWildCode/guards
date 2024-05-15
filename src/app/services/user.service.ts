import { Injectable } from '@angular/core';

enum UserType {
  ADMIN = 'ADMIN',
  ANONYMOUS = 'ANONYMOUS',
  USER = 'USER',
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: UserType = UserType.ANONYMOUS;

  constructor() {}

  public getRole() {
    return this.role;
  }
  public setAdmin() {
    this.role = UserType.ADMIN;
  }
  public setUser() {
    this.role = UserType.USER;
  }
  public setAnonymous() {
    this.role = UserType.ANONYMOUS;
  }
}
