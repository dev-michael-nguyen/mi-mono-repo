import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Core, Dashboard, Form, Tus } from 'uppy';
import { ClassExpression } from '../../../responsive/responsive-container/models/class-expression';

@Component({
  selector: 'silo-uppy-file-dashboard',
  templateUrl: './uppy-file-dashboard.component.html',
  styleUrls: ['./uppy-file-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UppyFileDashboardComponent implements OnInit {
  uppyInstance: Core.Uppy;

  @Input()
  tusEndpoint: string;

  @Input()
  metadataForm: string;

  @Input()
  hideUploadButton = false;

  @Input()
  customSubTitle = '4GB maximum file size';

  @Input()
  fieldSize: ClassExpression = 'col-6';

  @Output()
  completed = new EventEmitter<Core.UploadResult>();

  @Output()
  fileCounted = new EventEmitter<number>();

  ngOnInit(): void {
    this.setUppyInstance();
  }

  setUppyInstance() {
    this.uppyInstance = Core();

    this.uppyInstance.setOptions({
      restrictions: {
        maxFileSize: 4294967296, // 4GB
      },
    });

    this.uppyInstance
      .use(Dashboard, {
        inline: true,
        target: '.silo-uppy-file-dashboard',
        width: '100%',
        height: 440,
        hideUploadButton: this.hideUploadButton,
        showLinkToFileUploadResult: false,
      })
      .use(Form, {
        target: this.metadataForm,
      })
      .use(Tus, {
        endpoint: this.tusEndpoint,
      });

    this.uppyInstance.on('file-added', () => {
      this.fileCounted.emit(this.fileCount);
    });

    this.uppyInstance.on('files-added', () => {
      this.fileCounted.emit(this.fileCount);
    });

    this.uppyInstance.on('file-removed', () => {
      this.fileCounted.emit(this.fileCount);
    });

    this.uppyInstance.on('complete', (result: Core.UploadResult) => {
      this.completed.emit(result);
    });
  }

  get fileCount(): number {
    return this.uppyInstance.getFiles().length;
  }
}
