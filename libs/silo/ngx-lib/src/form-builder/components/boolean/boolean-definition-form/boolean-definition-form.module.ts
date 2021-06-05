import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetadataFormModule } from 'libs/silo/ngx-lib/src/metadata/metadata-components.public-api';
import { BooleanDefinitionFormComponent } from './boolean-definition-form.component';

@NgModule({
  imports: [CommonModule, MetadataFormModule],
  declarations: [BooleanDefinitionFormComponent],
  exports: [BooleanDefinitionFormComponent],
})
export class BooleanDefinitionFormModule {}
