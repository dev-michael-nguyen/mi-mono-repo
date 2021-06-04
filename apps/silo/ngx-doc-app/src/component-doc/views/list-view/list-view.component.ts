import { Component, OnInit } from '@angular/core';
import { NavListItemModel } from '@silo/ngx';

@Component({
  selector: 'silo-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  componentNavList: Array<NavListItemModel> = [
    { label: 'Boolean Checkbox', routerLink: 'boolean-checkbox' },
    { label: 'Checkbox List', routerLink: 'checkbox-list' },
    { label: 'Date Picker', routerLink: 'date-picker' },
    { label: 'Number Box', routerLink: 'number-box' },
    { label: 'Phone Box', routerLink: 'phone-box' },
    { label: 'Quill Rich Text', routerLink: 'quill-rich-text' },
    { label: 'Radio List', routerLink: 'radio-list' },
    { label: 'Single Autocomplete', routerLink: 'single-autocomplete' },
    { label: 'Single Select', routerLink: 'single-select' },
    { label: 'Text Area', routerLink: 'text-area' },
    { label: 'Text Box', routerLink: 'text-box' },
    { label: 'Time Picker', routerLink: 'time-picker' },
    { label: 'Uppy File Box', routerLink: 'uppy-file-box' },
    { label: 'Uppy File Dashboard', routerLink: 'uppy-file-dashboard' },
  ];

  constructor() {}

  ngOnInit() {}
}
