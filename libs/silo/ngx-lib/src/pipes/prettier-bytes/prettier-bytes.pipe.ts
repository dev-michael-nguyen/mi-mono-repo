import { Pipe, PipeTransform } from '@angular/core';

/**
 * Reference: https://github.com/Flet/prettier-bytes/blob/master/index.js
 */
@Pipe({
  name: 'siloPrettierBytes',
})
export class PrettierBytesPipe implements PipeTransform {
  transform(bytes: number): string {
    const isNegative = bytes < 0;
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    if (isNegative) {
      bytes = -bytes;
    }

    if (bytes < 1) {
      return (isNegative ? '-' : '') + bytes.toString() + ' B';
    }

    const exponent = Math.min(
      Math.floor(Math.log(bytes) / Math.log(1000)),
      units.length - 1,
    );
    bytes = Number(bytes / Math.pow(1000, exponent));
    const unit = units[exponent];

    if (bytes >= 10 || bytes % 1 === 0) {
      // Do not show decimals when the number is two-digit, or if the number has no
      // decimal component.
      return (isNegative ? '-' : '') + bytes.toFixed(0) + ' ' + unit;
    } else {
      return (isNegative ? '-' : '') + bytes.toFixed(1) + ' ' + unit;
    }
  }
}
