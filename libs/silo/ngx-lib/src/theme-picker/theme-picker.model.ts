export interface IThemePickerModel {
  currentThemeId: string;
  lookupList: Array<IThemeLookupModel>;
}

export interface IThemeLookupModel {
  id: string;
  displayName: string;
  isDefaultValue?: boolean;
}

export interface IThemeChangedEvent {
  previousTheme: IThemeLookupModel;
  currentTheme: IThemeLookupModel;
}