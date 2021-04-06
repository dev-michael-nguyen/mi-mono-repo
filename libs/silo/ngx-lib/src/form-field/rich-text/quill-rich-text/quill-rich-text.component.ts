import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { RichTextFieldComponent } from './../rich-text-field.component';

@Component({
  selector: 'silo-quill-rich-text',
  templateUrl: './quill-rich-text.component.html',
  styleUrls: ['./quill-rich-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuillRichTextComponent
  extends RichTextFieldComponent
  implements AfterViewInit {
  ngAfterViewInit() {
    this.addAccessibility();
  }

  addAccessibility() {
    // in read-only, allow ql-editor to be focusable
    if (this.isReadOnly) {
      const qlEditor = this._elementRef.nativeElement.querySelector(
        '.ql-editor',
      ) as HTMLElement;
      if (qlEditor) {
        qlEditor.tabIndex = 0;
      }
    }
  }
}
