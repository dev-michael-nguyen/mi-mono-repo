import { Component, OnInit } from '@angular/core';
import { Person } from '@mi-mono-repo/mi-api-lib';

@Component({
  selector: 'mi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const person = new Person();
    console.log(person.metadata);
  }

}
