import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mi-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {

  readonly isUpdating$ = new BehaviorSubject(false);
  readonly isUpdateRequested$ = new BehaviorSubject(false);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateDialogComponent>
  ) { }

  onYesClick() {
    this.isUpdateRequested$.next(true);
  }

}
