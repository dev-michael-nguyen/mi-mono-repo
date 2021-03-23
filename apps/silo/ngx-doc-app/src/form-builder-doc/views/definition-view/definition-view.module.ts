import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilderModule } from '@silo/ngx';
import { DefinitionViewComponent } from './definition-view.component';

@NgModule({
  imports: [CommonModule, FormBuilderModule],
  declarations: [DefinitionViewComponent],
})
export class DefinitionViewModule {}
