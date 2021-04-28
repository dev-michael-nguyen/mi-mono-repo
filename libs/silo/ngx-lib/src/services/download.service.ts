import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

/**
 * This is a wrapper for all possible export mixin interfaces that we may support
 */
@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private _httpClient: HttpClient) {}

  download(url: string): Observable<HttpResponse<ArrayBuffer>> {
    return this._httpClient
      .get(`${url}`, {
        responseType: 'arraybuffer',
        observe: 'response',
      })
      .pipe(
        tap((response: HttpResponse<ArrayBuffer>) => {
          this.downloadResponse(response);
        }),
      );
  }

  downloadResponse(response: HttpResponse<ArrayBuffer>): void {
    if (!response) {
      return;
    }

    let filename = '';
    const disposition = response.headers.get('Content-Disposition');
    if (disposition && disposition.indexOf('attachment') !== -1) {
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = filenameRegex.exec(disposition);
      if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
      }
    }

    const type = response.headers.get('Content-Type');

    const blob = new Blob([response.body], { type: type });
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created.
      // These URLs will no longer resolve as the data backing the URL has been freed."
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const URL = window.URL || window.webkitURL;
      const downloadUrl = URL.createObjectURL(blob);

      if (filename) {
        // use HTML5 a[download] attribute to specify filename
        const a = document.createElement('a');
        // safari doesn't support this yet
        if (typeof a.download === 'undefined') {
          window.location.assign(downloadUrl);
        } else {
          a.href = downloadUrl;
          a.download = filename;
          a.className = 'hidden';
          a.innerText = 'Download Link';
          document.body.appendChild(a);
          a.click();
        }
      } else {
        window.location.assign(downloadUrl);
      }

      setTimeout(function () {
        URL.revokeObjectURL(downloadUrl);
      }, 100); // cleanup
    }
  }

  getFileAsBase64ImageString(
    url: string,
    mimeTypeName: string,
  ): Observable<string> {
    return this._httpClient
      .get(`${url}`, {
        responseType: 'arraybuffer',
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<ArrayBuffer>) => {
          let binary = '';
          const bytes = new Uint8Array(response.body);
          for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
          }

          const base64ImageString =
            `data:${mimeTypeName};base64, ` + btoa(binary);
          return base64ImageString;
        }),
      );
  }
}
