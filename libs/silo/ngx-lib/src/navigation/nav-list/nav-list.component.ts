import { Component, Input } from '@angular/core';
import { NavListItemModel } from './models/nav-list-item-model';

@Component({
  selector: 'silo-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  @Input()
  lookupList: Array<NavListItemModel> = [];
}
