import { Component, Input } from '@angular/core';
import _get from 'lodash.get';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IAvatarNameModel } from './avatar.model';

@Component({
  selector: 'mi-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  @Input()
  public initials: string;

  @Input()
  public set name(name: IAvatarNameModel) {
    const firstInitial = _get(name, 'firstName[0]');
    const lastInitial = _get(name, 'lastName[0]');
    this.initials = `${firstInitial}${lastInitial}`;
  }

  @Input()
  public size = '48px';

  @Input()
  public fontSize = '32px';

  @Input()
  public base64ImageString$ = new BehaviorSubject<string>(undefined);

  @Input()
  public allowUpload = false;

  constructor() { }

  onAddAvatarClick() {
    if (!this.allowUpload) {
      return;
    }

    // TODO: implement configurable upload avatar image service
  }

}