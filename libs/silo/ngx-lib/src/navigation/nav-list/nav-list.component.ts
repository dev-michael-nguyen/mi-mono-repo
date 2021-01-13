import { Component, Input, OnInit } from '@angular/core';
import { INavListItemModel } from './nav-list.model';

@Component({
  selector: 'silo-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  @Input()
  lookupList: Array<INavListItemModel> = [];

  constructor() { }

  ngOnInit() {
  }

}
