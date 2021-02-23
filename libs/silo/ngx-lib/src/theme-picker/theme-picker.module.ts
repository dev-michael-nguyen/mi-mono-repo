import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SiloThemePickerComponent } from './theme-picker.component';
import { ThemePickerService } from './theme-picker.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  declarations: [SiloThemePickerComponent],
  exports: [SiloThemePickerComponent],
})
export class SiloThemePickerModule {
  static forRoot(): ModuleWithProviders<SiloThemePickerModule> {
    return {
      ngModule: SiloThemePickerModule,
      providers: [ThemePickerService],
    };
  }
}
