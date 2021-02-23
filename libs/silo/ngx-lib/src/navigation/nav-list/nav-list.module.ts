import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SiloNavListComponent } from './nav-list.component';

@NgModule({
  imports: [CommonModule, MatListModule, RouterModule],
  declarations: [SiloNavListComponent],
  exports: [SiloNavListComponent],
})
export class SiloNavListModule {}
