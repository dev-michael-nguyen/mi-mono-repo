import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface INavigationLink {
  path: string;
  matIcon: string;
  displayName: string;
}

@Component({
  selector: 'mi-resume-navigation-side-bar',
  templateUrl: './navigation-side-bar.component.html',
  styleUrls: ['./navigation-side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationSideBarComponent {

  @Input() links: Array<INavigationLink> = [];

}
