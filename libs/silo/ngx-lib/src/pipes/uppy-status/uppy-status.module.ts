import { NgModule } from '@angular/core';
import { UppyStatusPipe } from './uppy-status.pipe';

@NgModule({
    declarations: [UppyStatusPipe],
    exports: [UppyStatusPipe],
})
export class UppyStatusModule {}
