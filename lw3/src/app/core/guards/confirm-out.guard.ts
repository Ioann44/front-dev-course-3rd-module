import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const ConfirmOutGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return window.confirm('Вы уверены, что хотите покинуть страницу page3?');
}
