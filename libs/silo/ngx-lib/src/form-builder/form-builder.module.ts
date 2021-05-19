import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { StickyLayoutModule } from '../layout/sticky-layout/sticky-layout.module';
import { ControlMenuBarModule } from './../control-menu-bar/control-menu-bar.module';
import { FormElementPropertyWindowModule } from './components/form-element-definition-form-portal/form-element-definition-form.module';
import { FormElementPortalModule } from './components/form-element-portal/form-element-portal.module';
import { FormGroupElementComponent } from './components/group/form-group-element/form-group-element.component';
import { FormGroupElementModule } from './components/group/form-group-element/form-group-element.module';
import { GroupDefinitionFormComponent } from './components/group/group-definition-form/group-definition-form.component';
import { GroupDefinitionFormModule } from './components/group/group-definition-form/group-definition-form.module';
import { SectionElementComponent } from './components/group/section-element/section-element.component';
import { SectionElementModule } from './components/group/section-element/section-element.module';
import { TextAreaElementComponent } from './components/text/text-area-element/text-area-element.component';
import { TextAreaElementModule } from './components/text/text-area-element/text-area-element.module';
import { TextBoxElementComponent } from './components/text/text-box-element/text-box-element.component';
import { TextBoxElementModule } from './components/text/text-box-element/text-box-element.module';
import { TextDefinitionFormComponent } from './components/text/text-definition-form/text-definition-form.component';
import { TextDefinitionFormModule } from './components/text/text-definition-form/text-definition-form.module';
import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRegistryService } from './services/form-builder-registry.service';

@NgModule({
  imports: [
    CommonModule,
    ControlMenuBarModule,
    FlexLayoutModule,
    FormElementPortalModule,
    FormElementPropertyWindowModule,
    FormGroupElementModule,
    GroupDefinitionFormModule,
    MatButtonModule,
    MatMenuModule,
    SectionElementModule,
    StickyLayoutModule,
    TextAreaElementModule,
    TextBoxElementModule,
    TextDefinitionFormModule,
  ],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule {
  constructor(private _formBuilderRegistryService: FormBuilderRegistryService) {
    this._formBuilderRegistryService.register('FormGroup', {
      templateIdentifier: 'FormGroup',
      templateDisplayName: 'Form',
      elementComponent: FormGroupElementComponent,
      definitionFormComponent: GroupDefinitionFormComponent,
    });

    this._formBuilderRegistryService.register('Section', {
      templateIdentifier: 'Section',
      templateDisplayName: 'Section',
      elementComponent: SectionElementComponent,
      definitionFormComponent: GroupDefinitionFormComponent,
    });

    this._formBuilderRegistryService.register('TextBox', {
      templateIdentifier: 'TextBox',
      templateDisplayName: 'Text Box',
      elementComponent: TextBoxElementComponent,
      definitionFormComponent: TextDefinitionFormComponent,
    });

    this._formBuilderRegistryService.register('TextArea', {
      templateIdentifier: 'TextArea',
      templateDisplayName: 'Text Area',
      elementComponent: TextAreaElementComponent,
      definitionFormComponent: TextDefinitionFormComponent,
    });
  }
}
