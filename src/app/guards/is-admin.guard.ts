import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const User = inject(UserService);
  const router = inject(Router);
  if (state.url === '/admin' && User.getRole() !== 'ADMIN') {
    router.navigateByUrl('/');
    console.error('Accès refusé');
    return false;
  }
  return true;
};
