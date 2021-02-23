import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IThemeLookupModel } from './theme-picker.model';
import { ThemePickerService } from './theme-picker.service';

@Component({
  selector: 'silo-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
})
export class SiloThemePickerComponent implements OnInit {
  /**
   * The selected theme.
   */
  value: IThemeLookupModel;

  /**
   * The theme list.
   */
  @Input()
  lookupList = new Array<IThemeLookupModel>();

  /**
   * Output selected theme.
   */
  @Output()
  selectedTheme = new EventEmitter<IThemeLookupModel>();

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

  setTheme(theme: IThemeLookupModel) {
    this.value = theme;
    this.selectedTheme.emit(theme);
    this._themePickerService.setTheme(theme);
  }
}
