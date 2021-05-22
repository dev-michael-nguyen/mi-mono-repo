import { NgModule } from '@angular/core';
import { PrettierBytesPipe } from './prettier-bytes.pipe';

@NgModule({
  declarations: [PrettierBytesPipe],
  exports: [PrettierBytesPipe],
})
export class PrettierBytesModule {}
