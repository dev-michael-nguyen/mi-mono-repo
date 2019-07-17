import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeRouterRegistryService } from '../modules/home/home-router-registry.service';
import { HomeModule } from '../modules/home/home.module';
import { AppComponent, APP_NAME } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [
    { provide: APP_NAME, useValue: 'mi-sandbox' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    _homeRouterRegistryService: HomeRouterRegistryService
  ) {
    _homeRouterRegistryService.registerRoutes();
  }
}
