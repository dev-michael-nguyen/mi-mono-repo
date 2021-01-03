import { Component, Input } from '@angular/core';
import { INavigationListLinkButton } from '../navigation-list-link-button/navigation-list-link-button.model';

@Component({
  selector: 'mi-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent {

  @Input()
  public linkButtons: Array<INavigationListLinkButton> = [];

}
