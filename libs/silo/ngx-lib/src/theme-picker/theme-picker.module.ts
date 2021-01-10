import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemePickerComponent } from './theme-picker.component';
import { ThemePickerService } from './theme-picker.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent],
})
export class ThemePickerModule {

  constructor(
    @Optional() @SkipSelf() parentModule?: ThemePickerModule
  ) {
    if (parentModule) {
      throw new Error('ThemePickerModule is already loaded.');
    }
  }

  static forRoot(): ModuleWithProviders<ThemePickerModule> {
    return {
      ngModule: ThemePickerModule,
      providers: [
        ThemePickerService
      ]
    };
  }

}
