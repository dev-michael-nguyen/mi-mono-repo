import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { IThemeLookupModel, IThemePickerModel, ThemePickerService } from '@silo/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'silo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  selectedTheme: IThemeLookupModel;
  themeLookupList: Array<IThemeLookupModel> = [];

  constructor(
    private _overlayContainer: OverlayContainer,
    private _themePickerService: ThemePickerService
  ) { }

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
    this._themePickerService.setOverlayThemeChangeHandler(this._overlayContainer);
  }

  mockGetThemePickerModel() {
    const themePickerModel: IThemePickerModel = {
      lookupList: [
        { id: 'silo-light-theme', displayName: 'Light' },
        { id: 'silo-dark-theme', displayName: 'Dark' }
      ],
      currentThemeId: 'silo-light-theme'
    };

    return new Observable<IThemePickerModel>(observer => {
      observer.next(themePickerModel);
      observer.complete();
    });
  }

}
