import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface INavigationLink {
  path: string;
  matIcon: string;
  displayName: string;
}

@Component({
  selector: 'mi-resume-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationBarComponent {

  @Input() links: Array<INavigationLink> = [];

}
