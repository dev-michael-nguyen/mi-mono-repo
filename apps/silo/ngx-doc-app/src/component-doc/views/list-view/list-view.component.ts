import { Component, OnInit } from '@angular/core';
import { INavListItemModel } from '@silo/ngx';

@Component({
  selector: 'silo-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  componentNavList: Array<INavListItemModel> = [
    { label: 'Text Box', routerLink: 'text-box' },
    { label: 'Text Area', routerLink: 'text-area' },
    { label: 'Single Select', routerLink: 'single-select' },
    { label: 'Radio List', routerLink: 'radio-list' },
    { label: 'Checkbox List', routerLink: 'checkbox-list' },
  ];

  constructor() {}

  ngOnInit() {}
}
