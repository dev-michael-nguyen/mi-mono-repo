import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule, ThemePickerModule } from '@silo/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // #region App features
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ThemePickerModule.forRoot(),
    // #endregion
    // #region AppComponent imports
    AppLayoutModule,
    MatToolbarModule,
    // #endregion
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
