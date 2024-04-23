import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const ConfirmInGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return window.confirm('Вы уверены, что хотите перейти на страницу page2?');
}