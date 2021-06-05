import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { StickyLayoutModule } from '../layout/sticky-layout/sticky-layout.module';
import { ControlMenuBarModule } from './../control-menu-bar/control-menu-bar.module';
import { BooleanCheckboxElementModule } from './components/boolean/boolean-checkbox-element/boolean-checkbox-element.module';
import { BooleanDefinitionFormModule } from './components/boolean/boolean-definition-form/boolean-definition-form.module';
import { FormElementPropertyWindowModule } from './components/form-element-definition-form-portal/form-element-definition-form.module';
import { FormElementPortalModule } from './components/form-element-portal/form-element-portal.module';
import { FormGroupElementModule } from './components/group/form-group-element/form-group-element.module';
import { GroupDefinitionFormModule } from './components/group/group-definition-form/group-definition-form.module';
import { SectionElementModule } from './components/group/section-element/section-element.module';
import { TextAreaElementModule } from './components/text/text-area-element/text-area-element.module';
import { TextBoxElementModule } from './components/text/text-box-element/text-box-element.module';
import { TextDefinitionFormModule } from './components/text/text-definition-form/text-definition-form.module';
import { FormBuilderComponent } from './form-builder.component';

@NgModule({
  imports: [
    CommonModule,
    ControlMenuBarModule,
    FlexLayoutModule,
    FormElementPortalModule,
    FormElementPropertyWindowModule,
    MatButtonModule,
    MatMenuModule,
    SectionElementModule,
    StickyLayoutModule,
    // #region Elements
    BooleanCheckboxElementModule,
    BooleanDefinitionFormModule,
    FormGroupElementModule,
    GroupDefinitionFormModule,
    TextAreaElementModule,
    TextBoxElementModule,
    TextDefinitionFormModule,
    // #endregion
  ],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
})
export class FormBuilderModule {}
