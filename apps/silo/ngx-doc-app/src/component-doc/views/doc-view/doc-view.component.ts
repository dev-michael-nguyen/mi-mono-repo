import { Component, OnInit } from '@angular/core';
import { INavListItemModel } from '@silo/ngx';

@Component({
  selector: 'silo-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.scss']
})
export class DocViewComponent implements OnInit {

  componentNavList: Array<INavListItemModel> = [
    { label: 'Text Box', routerLink: 'text-box' },
    { label: 'Text Area', routerLink: 'text-area' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
