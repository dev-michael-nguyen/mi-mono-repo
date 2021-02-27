import { LookupConfig } from './../../../../../../../libs/silo/ngx-lib/src/form-field/single-select/single-select-field.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'silo-preview-view',
  templateUrl: './preview-view.component.html',
  styleUrls: ['./preview-view.component.scss'],
})
export class PreviewViewComponent implements OnInit {
  lookupConfig: LookupConfig = {
    lookups: [
      { key: 'O1', displayName: 'Option 1' },
      { key: 'O2', displayName: 'Option 2' },
    ],
  };

  componentPreviewList = [
    {
      routerLink: '../text-box',
      title: 'Text Box',
      sumamry: 'Text field input as text box.',
    },
    {
      routerLink: '../text-area',
      title: 'Text Area',
      sumamry: 'Text field input as text area.',
    },
    {
      routerLink: '../single-select',
      title: 'Single Select',
      sumamry: 'Lookup select as single select.',
    },
    {
      routerLink: '../radio-list',
      title: 'Radio List',
      sumamry: 'Lookup select as radio list.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
