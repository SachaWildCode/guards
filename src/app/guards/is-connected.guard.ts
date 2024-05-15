import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const User = inject(UserService);
  const router = inject(Router);
  console.log(state.url);
  if (state.url === '/dashboard' && User.getRole() === 'ANONYMOUS') {
    router.navigateByUrl('/');
    console.error('Accès refusé');
    return false;
  }
  return true;
};
