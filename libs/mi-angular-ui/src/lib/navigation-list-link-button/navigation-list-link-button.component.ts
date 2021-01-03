import { Component, Input } from '@angular/core';

@Component({
  selector: 'mi-navigation-list-link-button',
  templateUrl: './navigation-list-link-button.component.html',
  styleUrls: ['./navigation-list-link-button.component.scss']
})
export class NavigationListLinkButtonComponent {

  @Input()
  public icon: string;

  @Input()
  public iconSet: string;

  @Input()
  public badge: number;

  @Input()
  public label: string;

  @Input()
  public ariaLabel: string;

  @Input()
  public routerLink: Array<string> | string;

  @Input()
  public showTopBorder = false;

}
