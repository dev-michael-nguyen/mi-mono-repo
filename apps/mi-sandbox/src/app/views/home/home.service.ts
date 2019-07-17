import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, CanActivate } from '@angular/router';
import { of } from 'rxjs';
import { HomeModule } from './home.module';

@Injectable({
  providedIn: HomeModule
})
export class HomeService implements CanActivate, Resolve<any> {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return of(true);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return of({});
  }

}
