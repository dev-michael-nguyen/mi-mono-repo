import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextBoxModule } from '@mi-mono-repo/mi-ui-lib';
import { HomeRouterRegistryService } from './home-router-registry.service';
import { HomeModule as HomeViewModel } from './views/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HomeViewModel,
    TextBoxModule,
  ],
  providers: [
    HomeRouterRegistryService
  ]
})
export class HomeModule { }
