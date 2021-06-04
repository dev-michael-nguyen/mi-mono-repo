import { Component, OnInit } from '@angular/core';
import { NavListItemModel } from '@silo/ngx';

@Component({
  selector: 'silo-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  componentNavList: Array<NavListItemModel> = [
    { label: 'Text Box', routerLink: 'text-box' },
    { label: 'Text Area', routerLink: 'text-area' },
    { label: 'Quill Rich Text', routerLink: 'quill-rich-text' },
    { label: 'Single Select', routerLink: 'single-select' },
    { label: 'Single Autocomplete', routerLink: 'single-autocomplete' },
    { label: 'Radio List', routerLink: 'radio-list' },
    { label: 'Checkbox List', routerLink: 'checkbox-list' },
    { label: 'Date Picker', routerLink: 'date-picker' },
    { label: 'Time Picker', routerLink: 'time-picker' },
    { label: 'Phone Box', routerLink: 'phone-box' },
    { label: 'Number Box', routerLink: 'number-box' },
    { label: 'Uppy File Box', routerLink: 'uppy-file-box' },
    { label: 'Uppy File Dashboard', routerLink: 'uppy-file-dashboard' },
    { label: 'Boolean Checkbox', routerLink: 'boolean-checkbox' },
  ];

  constructor() {}

  ngOnInit() {}
}
