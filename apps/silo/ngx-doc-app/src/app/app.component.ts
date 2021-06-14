import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {
  ThemeLookupModel,
  ThemePickerModel,
  ThemePickerService,
} from '@silo/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'silo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedTheme: ThemeLookupModel;
  themeLookupList: Array<ThemeLookupModel> = [];

  constructor(
    private _overlayContainer: OverlayContainer,
    private _themePickerService: ThemePickerService,
  ) {}

  ngOnInit() {
    this.initAppTheme();
  }

  initAppTheme() {
    this.mockGetThemePickerModel().subscribe((themePickerModel) => {
      this._themePickerService.init(themePickerModel);
      this.selectedTheme = this._themePickerService.currentTheme;
    });
    this._themePickerService.themeChangedEvent$.subscribe((event) => {
      this.selectedTheme = event.currentTheme;
    });
    this._themePickerService.setOverlayThemeChangeHandler(
      this._overlayContainer,
    );
  }

  mockGetThemePickerModel() {
    const themePickerModel: ThemePickerModel = {
      lookupList: [
        { id: 'silo-light-theme', displayName: 'Silo Light' },
        { id: 'silo-dark-theme', displayName: 'Silo Dark' },
      ],
      currentThemeId: 'silo-light-theme',
    };

    return new Observable<ThemePickerModel>((observer) => {
      observer.next(themePickerModel);
      observer.complete();
    });
  }
}
