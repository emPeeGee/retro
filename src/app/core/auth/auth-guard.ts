import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthStore } from '@app/core/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStore);
  return authStore.isAuthenticated();
};
