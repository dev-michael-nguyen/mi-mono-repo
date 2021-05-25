import { Core } from 'uppy';

export class UppyStatusModel {
  fileCount = 0;
  isNotStartedFileCount = 0;
  isStartedFileCount = 0;
  completedFileCount = 0;
  failedFileCount = 0;
  isStarted = false;
  hasError = false;
  isCompleted = false;
  message = '';
  totalProgress = 0;

  constructor(uppyState: Core.State) {
    const fileIds = Object.keys(uppyState.files);

    fileIds.forEach((fileId) => {
      const file = uppyState.files[fileId];
      if (file.progress.uploadStarted) {
        this.isStartedFileCount += 1;
        if (file.progress.uploadComplete) {
          this.completedFileCount += 1;
        } else {
          this.failedFileCount += 1;
        }
      } else {
        this.isNotStartedFileCount += 1;
      }
    });

    const isStarted = this.isStartedFileCount > 0;
    const fileCount = fileIds.length;
    const hasError = !!uppyState.error;
    const isCompleted = hasError || uppyState.totalProgress === 100;

    if (!isStarted) {
      this.message = `Ready to upload ${fileCount} files`;
    } else if (isStarted && !isCompleted) {
      this.message = `Uploading... (${this.isStartedFileCount} of ${fileCount})`;
    } else if (isStarted && isCompleted) {
      this.message = `Upload Completed (${this.completedFileCount} of ${fileCount} completed)`;
    }
  }
}
