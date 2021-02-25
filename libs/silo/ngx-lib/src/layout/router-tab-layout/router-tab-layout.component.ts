import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { INavListItemModel } from '../../navigation/nav-list/nav-list.model';

@Component({
  selector: 'silo-router-tab-layout',
  templateUrl: './router-tab-layout.component.html',
  styleUrls: ['./router-tab-layout.component.scss'],
})
export class RouterTabLayoutComponent implements OnInit {
  @Input()
  navList: Array<INavListItemModel>;

  @Input()
  color: ThemePalette;

  @Input()
  backgroundColor: ThemePalette;

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.navList = this.activatedRoute.snapshot.data.navList || this.navList;
  }
}
