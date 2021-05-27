import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetadataFormComponent } from './metadata-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MetadataFormComponent],
  exports: [MetadataFormComponent],
})
export class MetadataFormModule {}
