import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ResponsiveContainerModule } from './../../../responsive/responsive-container/responsive-container.module';
import { SiloLegacyTextAreaComponent } from './legacy-text-area.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    ResponsiveContainerModule,
  ],
  declarations: [SiloLegacyTextAreaComponent],
  exports: [SiloLegacyTextAreaComponent],
})
export class SiloLegacyTextAreaModule {}