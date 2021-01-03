import { Component, Input, OnInit } from '@angular/core';
import { INavigationBarLinkButton } from '../navigation-bar-link-button/navigation-bar-link-button.model';

@Component({
  selector: 'mi-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Input()
  public linkButtons: Array<INavigationBarLinkButton> = [];

  @Input()
  public showLinkLabel = true;

  constructor() { }

  ngOnInit() {
  }

}
