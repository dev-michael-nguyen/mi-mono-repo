import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AvatarNameModel } from './models/avatar-name-model';

@Component({
  selector: 'silo-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input()
  public initials = '';

  @Input()
  public set name(name: AvatarNameModel) {
    const firstInitial = name.firstName.slice(0, 1);
    const lastInitial = name.lastName.slice(0, 1);
    this.initials = `${firstInitial}${lastInitial}`;
  }

  @Input()
  public size = '48px';

  @Input()
  public fontSize = '32px';

  @Input()
  public base64ImageString$ = new BehaviorSubject<string>('');

  @Input()
  public allowUpload = false;

  onAddAvatarClick() {
    if (!this.allowUpload) {
      return;
    }

    // TODO: implement configurable upload avatar image service
  }
}
