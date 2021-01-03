import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'mi-navigation-bar-link-button',
  templateUrl: './navigation-bar-link-button.component.html',
  styleUrls: ['./navigation-bar-link-button.component.scss'],
})
export class NavigationBarLinkButtonComponent {

  // TBD: Need to figure out why host automatically has tabindex="0"
  @HostBinding('tabindex') tabindex = -1;

  @Input()
  public icon: string;

  @Input()
  public iconSet: string;

  @Input()
  public label: string;

  @Input()
  public showLabel = true;

  @Input()
  public ariaLabel: string;

  @Input()
  public routerLink: Array<string> | string;

}
