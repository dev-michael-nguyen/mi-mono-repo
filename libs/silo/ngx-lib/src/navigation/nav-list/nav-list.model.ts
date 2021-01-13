export interface INavListItemModel {
  label: string;
  tooltip?: string;
  ariaLabel?: string;
  routerLink: Array<string> | string;
}