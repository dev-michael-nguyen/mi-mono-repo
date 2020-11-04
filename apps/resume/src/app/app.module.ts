import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENABLE_SW, InitApplicationServiceProvider, IS_PRODUCTION, OfflineModule, SERVICE_WORKER_CONFIG } from '@mi-angular-ui/offline';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    OfflineModule,
  ],
  providers: [
    InitApplicationServiceProvider,
    {
      provide: IS_PRODUCTION,
      useValue: environment.production
    },
    {
      provide: ENABLE_SW,
      useValue: environment.enableSw
    },
    {
      provide: SERVICE_WORKER_CONFIG, useValue: {
        file: './service-worker.js',
        registerOptions: {},
        additionalManifestUrls: []
      }
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
