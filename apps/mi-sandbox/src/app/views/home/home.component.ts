import { Component, OnInit } from '@angular/core';
import { PersonModel } from '@mi-mono-repo/mi-api-lib';

@Component({
  selector: 'mi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const personModel = new PersonModel();
    console.log(personModel.metadata);
  }

}
