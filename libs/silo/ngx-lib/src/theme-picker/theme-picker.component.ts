import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeLookupModel } from './models/theme-lookup-model';
import { ThemePickerService } from './theme-picker.service';

@Component({
  selector: 'silo-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
})
export class ThemePickerComponent implements OnInit {
  /**
   * The selected theme.
   */
  value: ThemeLookupModel;

  /**
   * The theme list.
   */
  @Input()
  lookupList = new Array<ThemeLookupModel>();

  /**
   * Output selected theme.
   */
  @Output()
  selectedTheme = new EventEmitter<ThemeLookupModel>();

  constructor(private _themePickerService: ThemePickerService) {}

  ngOnInit() {
    // set data when service is initialized
    this._themePickerService.isInitialized$.subscribe((value) => {
      if (value) {
        this.lookupList = this._themePickerService.themeLookupList;
        this.value = this._themePickerService.currentTheme;
      }
    });
  }

  setTheme(theme: ThemeLookupModel) {
    this.value = theme;
    this.selectedTheme.emit(theme);
    this._themePickerService.setTheme(theme);
  }
}
