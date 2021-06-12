import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { StickyLayoutModule } from '../layout/sticky-layout/sticky-layout.module';
import { ControlMenuBarModule } from './../control-menu-bar/control-menu-bar.module';
import { BooleanCheckboxElementModule } from './components/boolean/boolean-checkbox-element/boolean-checkbox-element.module';
import { FormElementDefinitionFormPortalModule } from './components/form-element-definition-form-portal/form-element-definition-form.module';
import { FormElementDefinitionFormModule } from './components/form-element-definition-form/form-element-definition-form.module';
import { FormElementPortalModule } from './components/form-element-portal/form-element-portal.module';
import { FormGroupElementModule } from './components/group/form-group-element/form-group-element.module';
import { SectionElementModule } from './components/group/section-element/section-element.module';
import { TextAreaElementModule } from './components/text/text-area-element/text-area-element.module';
import { TextBoxElementModule } from './components/text/text-box-element/text-box-element.module';
import { FormBuilderComponent } from './form-builder.component';

@NgModule({
  imports: [
    CommonModule,
    ControlMenuBarModule,
    FlexLayoutModule,
    FormElementDefinitionFormModule,
    FormElementDefinitionFormPortalModule,
    FormElementPortalModule,
    MatButtonModule,
    MatMenuModule,
    SectionElementModule,
    StickyLayoutModule,
    // #region Elements
    BooleanCheckboxElementModule,
    FormGroupElementModule,
    TextAreaElementModule,
    TextBoxElementModule,
    // #endregion
  ],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule {}
