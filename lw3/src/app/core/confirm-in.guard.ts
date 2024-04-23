import { CanActivateFn } from '@angular/router';

export const confirmInGuard: CanActivateFn = (route, state) => {
  return true;
};
