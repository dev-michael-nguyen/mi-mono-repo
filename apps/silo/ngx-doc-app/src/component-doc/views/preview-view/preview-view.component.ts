import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'silo-preview-view',
  templateUrl: './preview-view.component.html',
  styleUrls: ['./preview-view.component.scss']
})
export class PreviewViewComponent implements OnInit {

  componentPreviewList = [
    {
      routerLink: '../text-box',
      title: 'Text Box',
      sumamry: 'Text field input as text box.'
    },
    {
      routerLink: '../text-area',
      title: 'Text Area',
      sumamry: 'Text field input as text area.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
