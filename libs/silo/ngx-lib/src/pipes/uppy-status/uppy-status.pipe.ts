import { Pipe, PipeTransform } from '@angular/core';
import { Core } from 'uppy';
import { UppyStatusModel } from './uppy-status-model';

@Pipe({
  name: 'siloUppyStatus',
})
export class UppyStatusPipe implements PipeTransform {
  transform(uppyState: Core.State): UppyStatusModel {
    return new UppyStatusModel(uppyState);
  }
}
