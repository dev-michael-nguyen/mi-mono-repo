import { Component, ElementRef, ViewChild } from '@angular/core';
import { PhoneFieldComponent } from '../phone-field.component';

@Component({
  selector: 'silo-phone-box',
  templateUrl: './phone-box.component.html',
  styleUrls: ['./phone-box.component.scss'],
})
export class PhoneBoxComponent extends PhoneFieldComponent {
  @ViewChild('telInput')
  telInput: ElementRef<HTMLInputElement>;

  autoFormat($event: KeyboardEvent) {
    if ($event.key === 'Backspace') {
      return;
    }

    const value = this.phoneFormControl.value;

    if (
      new RegExp('^\\d{3}$').test(value) ||
      new RegExp('^\\d{3}-\\d{3}$').test(value)
    ) {
      const newValue = `${value}-`;
      this.telInput.nativeElement.value = `${value}-`;
      this.phoneFormControl.setValue(newValue, { emitEvent: false });
    }
  }
}
