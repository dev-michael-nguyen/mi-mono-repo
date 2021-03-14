import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'silo-download-progress-dialog',
  templateUrl: './download-progress-dialog.component.html',
  styleUrls: ['./download-progress-dialog.component.scss'],
})
export class DownloadProgressDialogComponent {
  message$ = new BehaviorSubject<string>('');
  percent$ = new BehaviorSubject<number>(0);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: unknown,
    public dialogRef: MatDialogRef<DownloadProgressDialogComponent>,
  ) {
    this.percent$
      .pipe(
        filter((percent) => percent === 100),
        first(),
      )
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
