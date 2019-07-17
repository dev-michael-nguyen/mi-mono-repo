import { Component, Inject, InjectionToken } from '@angular/core';

export const APP_NAME = new InjectionToken<string>('APP_NAME');

@Component({
  selector: 'mi-sandbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    @Inject(APP_NAME) public appName: string
  ) { }

}
