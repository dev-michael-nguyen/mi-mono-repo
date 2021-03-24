import { Component, OnInit } from '@angular/core';
import { LookupConfigModel } from '@silo/ngx';

@Component({
  selector: 'silo-preview-view',
  templateUrl: './preview-view.component.html',
  styleUrls: ['./preview-view.component.scss'],
})
export class PreviewViewComponent implements OnInit {
  lookupConfig: LookupConfigModel = {
    lookups: [
      { key: 'O1', displayName: 'Option 1' },
      { key: 'O2', displayName: 'Option 2' },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
