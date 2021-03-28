import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StickyLayoutModule } from '../layout/sticky-layout/sticky-layout.module';
import { FormBuilderComponent } from './form-builder.component';
import { FormElementPropertyWindowModule } from './form-element-property-window/form-element-property-window.module';
import { FormElementModule } from './form-element/form-element.module';
import { GroupPropertyWindowComponent } from './group/group-property-window/group-property-window.component';
import { GroupPropertyWindowModule } from './group/group-property-window/group-property-window.module';
import { RootElementComponent } from './group/root-element/root-element.component';
import { RootElementModule } from './group/root-element/root-element.module';
import { FormBuilderRegistryService } from './services/form-builder-registry.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormElementModule,
    FormElementPropertyWindowModule,
    GroupPropertyWindowModule,
    RootElementModule,
    StickyLayoutModule,
  ],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule {
  constructor(private _formBuilderRegistryService: FormBuilderRegistryService) {
    this._formBuilderRegistryService.register('Form', {
      elementType: RootElementComponent,
      windowType: GroupPropertyWindowComponent,
    });
  }
}
