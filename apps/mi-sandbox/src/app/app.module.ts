import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRouterRegistryService } from './app-router-registry.service';
import { AppComponent, APP_NAME } from './app.component';
import { HomeModule } from './views/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [
    AppRouterRegistryService,
    { provide: APP_NAME, useValue: 'mi-sandbox' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    _appRouterRegistryService: AppRouterRegistryService
  ) {
    _appRouterRegistryService.registerRoutes();
  }
}
