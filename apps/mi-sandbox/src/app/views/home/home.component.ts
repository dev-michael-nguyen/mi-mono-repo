import { Component, OnInit } from '@angular/core';
import 'reflect-metadata';

function Label(value: string) {
  return Reflect.metadata('label', value);
}

function getMetadata(target: any) {
  const metadata: any = {};

  Object.keys(target).forEach(propertyKey => {
    const propertyMetadata = {};

    const metadataKeys = Reflect.getMetadataKeys(target, propertyKey);
    metadataKeys.splice(0, 1);
    metadataKeys.forEach(metadataKey => {
      const metadataValue = Reflect.getMetadata(metadataKey, target, propertyKey);
      if (metadataValue) {
        propertyMetadata[metadataKey] = metadataValue;
      }
    });

    metadata[propertyKey] = propertyMetadata;
  });

  metadata.$type = target.$type;

  return metadata;
}

class Person {
  $type = 'Person';

  @Label('First Name')
  firstName = '';

  @Label('Last Name')
  lastName = '';
}

@Component({
  selector: 'mi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const person = new Person();
    const personMetadata = getMetadata(person);
    console.log(personMetadata);
  }

}
