import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StickyLayoutModule } from '../layout/sticky-layout/sticky-layout.module';
import { FormBuilderComponent } from './form-builder.component';
import { FormElementPropertyWindowModule } from './form-element-property-window/form-element-property-window.module';
import { FormElementModule } from './form-element/form-element.module';
import { FormGroupElementComponent } from './group/form-group-element/form-group-element.component';
import { FormGroupElementModule } from './group/form-group-element/form-group-element.module';
import { GroupPropertyWindowComponent } from './group/group-property-window/group-property-window.component';
import { GroupPropertyWindowModule } from './group/group-property-window/group-property-window.module';
import { SectionElementComponent } from './group/section-element/section-element.component';
import { SectionElementModule } from './group/section-element/section-element.module';
import { FormBuilderRegistryService } from './services/form-builder-registry.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormElementModule,
    FormElementPropertyWindowModule,
    FormGroupElementModule,
    GroupPropertyWindowModule,
    SectionElementModule,
    StickyLayoutModule,
  ],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule {
  constructor(private _formBuilderRegistryService: FormBuilderRegistryService) {
    this._formBuilderRegistryService.register('FormGroup', {
      elementType: FormGroupElementComponent,
      windowType: GroupPropertyWindowComponent,
    });

    this._formBuilderRegistryService.register('Section', {
      elementType: SectionElementComponent,
      windowType: GroupPropertyWindowComponent,
    });
  }
}
