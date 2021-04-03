import { Component, Input } from '@angular/core';
import { get } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { AvatarNameModel } from './models/avatar-name-model';

@Component({
  selector: 'silo-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input()
  public initials: string;

  @Input()
  public set name(name: AvatarNameModel) {
    const firstInitial = get(name, 'firstName[0]');
    const lastInitial = get(name, 'lastName[0]');
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

  onAddAvatarClick() {
    if (!this.allowUpload) {
      return;
    }

    // TODO: implement configurable upload avatar image service
  }
}
