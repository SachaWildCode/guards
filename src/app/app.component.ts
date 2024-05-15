import { Component, inject } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  router = inject(Router);
  UserService = inject(UserService);
  title = 'guards';
  goToPage(page: string) {
    this.router.navigate([page]);
    console.log(this.UserService.getRole());
  }
  setAdmin() {
    this.UserService.setAdmin();
  }
  setUser() {
    this.UserService.setUser();
  }
  setAnonymous() {
    this.UserService.setAnonymous();
  }
}
