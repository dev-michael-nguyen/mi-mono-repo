import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { StickyLayoutModule } from '../sticky-layout/sticky-layout.module';
import { RouterTabLayoutComponent } from './router-tab-layout.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    StickyLayoutModule
  ],
  declarations: [RouterTabLayoutComponent]
})
export class RouterTabLayoutModule { }
