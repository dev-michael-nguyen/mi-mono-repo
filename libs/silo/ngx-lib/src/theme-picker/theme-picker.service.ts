import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IThemeChangedEvent, IThemeLookupModel, IThemePickerModel } from './theme-picker.model';

@Injectable()
export class ThemePickerService {

  /**
     * The service is initialized subject.
     */
  isInitialized$ = new BehaviorSubject<boolean>(false);

  /**
   * The theme lookup list.
   */
  themeLookupList: Array<IThemeLookupModel>;

  /**
   * The previous theme.
   */
  previousTheme: IThemeLookupModel;

  /**
   * The current theme.
   */
  currentTheme: IThemeLookupModel;

  /**
   * The theme change event.
   */
  themeChangedEvent$ = new Subject<IThemeChangedEvent>();

  constructor() { }

  init(themePickerModel: IThemePickerModel) {
    this.themeLookupList = themePickerModel.lookupList || [];
    const currentTheme = this.themeLookupList.find(x => x.id === themePickerModel.currentThemeId);
    this.setTheme(currentTheme, false);
    this.isInitialized$.next(true);
  }

  setTheme(theme: IThemeLookupModel, emitEvent = true) {
    this.previousTheme = this.currentTheme;
    this.currentTheme = theme;
    if (emitEvent) {
      this.themeChangedEvent$.next({
        previousTheme: this.previousTheme,
        currentTheme: this.currentTheme
      });
    }
  }

  setOverlayThemeChangeHandler(overlayContainer: OverlayContainer) {
    // init overlay container with current theme
    overlayContainer.getContainerElement().classList.toggle(this.currentTheme.id);

    // toggle theme on theme changed
    return this.themeChangedEvent$.subscribe(() => {
      // toggle off previous theme
      if (this.previousTheme) {
        overlayContainer.getContainerElement().classList.toggle(this.previousTheme.id);
      }

      // toggle on current theme
      if (this.currentTheme) {
        overlayContainer.getContainerElement().classList.toggle(this.currentTheme.id);
      }
    });
  }

}
