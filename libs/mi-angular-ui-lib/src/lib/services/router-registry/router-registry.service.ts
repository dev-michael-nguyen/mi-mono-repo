import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterRegistryService {

  constructor(
    private _router: Router
  ) { }

  registerRoutes(routes: Array<Route> = []): void {
    this._router.config.unshift(...routes);
  }

  updateRoutes(routes: Array<Route> = []): void {
    this._router.resetConfig(routes);
  }

}
