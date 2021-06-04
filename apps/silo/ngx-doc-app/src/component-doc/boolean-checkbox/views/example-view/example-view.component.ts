import { Component, OnInit } from '@angular/core';
import { LookupConfigModel } from '@silo/ngx';

@Component({
  selector: 'silo-example-view',
  templateUrl: './example-view.component.html',
  styleUrls: ['./example-view.component.scss'],
})
export class ExampleViewComponent implements OnInit {
  lookupConfig: LookupConfigModel = {
    lookups: [
      { key: 'O1', displayName: 'Option 1' },
      { key: 'O2', displayName: 'Option 2' },
      { key: 'O3', displayName: 'Donec rutrum congue leo eget malesuada' },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
