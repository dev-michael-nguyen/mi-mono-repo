import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Core, Dashboard, DropTarget, Form, StatusBar, Tus } from 'uppy';
import { ClassExpression } from '../../../responsive/responsive-container/models/class-expression';

interface UppyError {
  isRestriction: boolean;
  stack: string;
  message: string;
}

@Component({
  selector: 'silo-uppy-file-dashboard',
  templateUrl: './uppy-file-dashboard.component.html',
  styleUrls: ['./uppy-file-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UppyFileDashboardComponent implements AfterViewInit {
  uppyInstance: Core.Uppy;

  files: Array<Core.UppyFile> = [];

  successfulFiles: Array<Core.UppyFile> = [];

  failedFiles: Array<Core.UppyFile> = [];

  isUploading = false;

  @Input()
  useUppyDashboard = false;

  @Input()
  tusEndpoint: string;

  @Input()
  metadataForm: string;

  @Input()
  currentMetadata: Array<string> = [];

  @Input()
  readyForUpload = false;

  @Input()
  fieldSize: ClassExpression = 'col-6';

  @ViewChild('fileInput', { static: false })
  fileInput: ElementRef<HTMLInputElement>;

  @Output()
  fileCounted = new EventEmitter<number>();

  @Output()
  completed = new EventEmitter<Core.UploadResult>();

  ngAfterViewInit(): void {
    this.setUppyInstance();
    this.setFileInput();
  }

  setUppyInstance(): void {
    this.uppyInstance = Core();

    this.uppyInstance.setOptions({
      restrictions: {
        maxFileSize: 4294967296, // 4GB
      },
    });

    if (this.useUppyDashboard) {
      this.uppyInstance.use(Dashboard, {
        inline: true,
        target: '.silo-uppy-file-dashboard',
        width: '100%',
        height: 440,
        showLinkToFileUploadResult: true,
      });
    } else {
      this.uppyInstance.use(DropTarget, {
        target: '.silo-custom-uppy-file-dashboard',
      });

      this.uppyInstance.use(StatusBar, {
        target: '.footer__status-bar',
        hideAfterFinish: false,
        hideUploadButton: true,
        hideCancelButton: true,
        hideRetryButton: true,
        hidePauseResumeButton: true,
      });
    }

    if (this.metadataForm) {
      this.uppyInstance.use(Form, {
        target: this.metadataForm,
      });
    }

    if (this.tusEndpoint) {
      this.uppyInstance.use(Tus, {
        endpoint: this.tusEndpoint,
      });
    }

    this.uppyInstance.on('file-added', () => {
      this.setFiles();
    });

    this.uppyInstance.on('file-removed', () => {
      this.setFiles();
    });

    this.uppyInstance.on('complete', (result: Core.UploadResult) => {
      this.isUploading = false;
      this.setFiles();
      this.completed.emit(result);
      this.onUploadCompleted(result);
    });
  }

  setFileInput(): void {
    if (this.useUppyDashboard) {
      return;
    }

    this.fileInput.nativeElement.addEventListener('change', (event: Event) => {
      const files = Array.from((event.target as HTMLInputElement).files);

      files.forEach((file: File) => {
        try {
          this.uppyInstance.addFile({
            source: 'file input',
            name: file.name,
            type: file.type,
            data: file,
          });
        } catch (error: unknown) {
          const uppyError = error as UppyError;
          if (uppyError.isRestriction) {
            this.uppyInstance.log(uppyError.message, 'error');
          }
        }
      });
    });
  }

  setFiles(): void {
    this.files = this.uppyInstance.getFiles();
    this.fileCounted.emit(this.files.length);
  }

  onAddFromComputerClick(): void {
    this.fileInput.nativeElement.click();
  }

  onRemoveFileClick(file: Core.UppyFile): void {
    this.uppyInstance.removeFile(file.id);
  }

  onClearClick(): void {
    this.isUploading = false;
    this.failedFiles = [];
    void this.uppyInstance.reset();
  }

  onCancelClick(): void {
    this.isUploading = false;
    this.failedFiles = [];
    this.uppyInstance.cancelAll();
  }

  onRetryClick(): void {
    this.isUploading = true;
    this.failedFiles = [];
    void this.uppyInstance.retryAll();
  }

  onUploadClick(): void {
    this.isUploading = true;
    this.failedFiles = [];
    void this.uppyInstance.upload();
  }

  onUploadCompleted(result: Core.UploadResult): void {
    this.successfulFiles = result.successful;
    this.failedFiles = result.failed;
  }
}
