import { Component, Input } from '@angular/core';
import { INavListItemModel } from './nav-list.model';

@Component({
  selector: 'silo-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class SiloNavListComponent {
  @Input()
  lookupList: Array<INavListItemModel> = [];
}
