import { Injectable } from '@angular/core';
import { RouterRegistryService } from '@mi-mono-repo/mi-angular-ui-lib';
import { HomeComponent } from './views/home/home.component';
import { HomeService } from './views/home/home.service';

export enum AppRoutePath {
  Root = 'app'
}

@Injectable()
export class AppRouterRegistryService {

  constructor(
    private _routerRegistryService: RouterRegistryService
  ) { }

  registerRoutes() {
    this._routerRegistryService.registerRoutes([
      {
        path: '',
        redirectTo: AppRoutePath.Root
      },
      {
        path: AppRoutePath.Root,
        component: HomeComponent,
        canActivate: [HomeService],
        resolve: {
          store: HomeService
        }
      }
    ]);
  }

}
