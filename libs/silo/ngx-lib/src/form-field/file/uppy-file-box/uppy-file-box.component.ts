import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Core, StatusBar, Tus } from 'uppy';
import { ClassExpression } from '../../../responsive/responsive-container/models/class-expression';
import { randomHtmlId } from '../../../utils/random-html-id';

@Component({
  selector: 'silo-uppy-file-box',
  templateUrl: './uppy-file-box.component.html',
  styleUrls: ['./uppy-file-box.component.scss'],
})
export class UppyFileBoxComponent implements OnInit, AfterViewInit {
  uppyInstance: Core.Uppy;

  formGroup: FormGroup;

  fileFormControl: FormControl;

  hasValidators = false;

  labelId: string;

  describebyId: string;

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  hint: string;

  @Input()
  isReadOnly = false;

  @Input()
  isRequired = false;

  @Input()
  fieldSize: ClassExpression = 'col-2';

  @Input()
  fieldOutlineSize: ClassExpression;

  @Input()
  preUpload = true;

  @Input()
  tusEndpoint: string;

  @ViewChild('fileInput', { static: true })
  fileInput: ElementRef<HTMLInputElement>;

  @ViewChild('statusBar', { static: true })
  statusBar: ElementRef<HTMLInputElement>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.setDefinition();
    this.setForm();
    this.setUppyInstance();
  }

  ngAfterViewInit() {
    this.fileInput.nativeElement.addEventListener('change', (event) => {
      const files = Array.from((event.target as HTMLInputElement).files);

      files.forEach((file) => {
        try {
          this.uppyInstance.addFile({
            source: 'file input',
            name: file.name,
            type: file.type,
            data: file,
          });

          if (this.preUpload) {
            this.uppyInstance.upload().then((result: Core.UploadResult) => {
              console.log(result);
            });
          }
        } catch (err) {
          if (err.isRestriction) {
            // handle restrictions
            console.log('Restriction error:', err);
          } else {
            // handle other errors
            console.error(err);
          }
        }
      });

      if (files.length) {
        this.fileFormControl.setValue(files[0]);
        this.fileFormControl.markAsDirty();
      }
    });
  }

  setDefinition() {
    this.labelId = randomHtmlId();
    this.describebyId = randomHtmlId();
  }

  setForm() {
    this.fileFormControl = this._formBuilder.control(null);
    this.formGroup = this._formBuilder.group({
      file: this.fileFormControl,
    });
  }

  setUppyInstance() {
    this.uppyInstance = Core();

    this.uppyInstance.use(Tus, {
      endpoint: this.tusEndpoint,
    });

    this.uppyInstance.use(StatusBar, {
      target: this.statusBar.nativeElement,
      hideUploadButton: this.preUpload,
    });

    this.uppyInstance.on('file-removed', () => {
      this.fileInput.nativeElement.value = null;
    });

    this.uppyInstance.on('complete', () => {
      this.fileInput.nativeElement.value = null;
    });
  }

  chooseFile() {
    this.fileInput.nativeElement.click();
  }

  clearFile() {
    this.fileInput.nativeElement.value = null;
    this.fileFormControl.reset();
    this.uppyInstance.reset();
  }
}
