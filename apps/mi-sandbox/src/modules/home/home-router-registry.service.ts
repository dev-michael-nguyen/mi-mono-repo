import { Injectable } from '@angular/core';
import { RouterRegistryService } from '@mi-mono-repo/mi-ui-lib';
import { HomeComponent } from './views/home/home.component';

export enum HomeRoutePath {
  Root = 'home'
}

@Injectable()
export class HomeRouterRegistryService {

  constructor(
    private _routerRegistryService: RouterRegistryService
  ) { }

  registerRoutes() {
    this._routerRegistryService.registerRoutes([
      {
        path: '',
        redirectTo: HomeRoutePath.Root
      },
      {
        path: HomeRoutePath.Root,
        component: HomeComponent
      }
    ]);
  }

}
