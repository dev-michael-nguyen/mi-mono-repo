import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { StickyLayoutModule } from '../layout/sticky-layout/sticky-layout.module';
import { ControlMenuBarModule } from './../control-menu-bar/control-menu-bar.module';
import { FormElementPortalModule } from './components/form-element-portal/form-element-portal.module';
import { FormElementPropertyWindowModule } from './components/form-element-property-window/form-element-property-window.module';
import { FormGroupElementComponent } from './components/group/form-group-element/form-group-element.component';
import { FormGroupElementModule } from './components/group/form-group-element/form-group-element.module';
import { GroupPropertyWindowComponent } from './components/group/group-property-window/group-property-window.component';
import { GroupPropertyWindowModule } from './components/group/group-property-window/group-property-window.module';
import { SectionElementComponent } from './components/group/section-element/section-element.component';
import { SectionElementModule } from './components/group/section-element/section-element.module';
import { TextAreaElementComponent } from './components/text/text-area-element/text-area-element.component';
import { TextAreaElementModule } from './components/text/text-area-element/text-area-element.module';
import { TextBoxElementComponent } from './components/text/text-box-element/text-box-element.component';
import { TextBoxElementModule } from './components/text/text-box-element/text-box-element.module';
import { TextPropertyWindowComponent } from './components/text/text-property-window/text-property-window.component';
import { TextPropertyWindowModule } from './components/text/text-property-window/text-property-window.module';
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
    GroupPropertyWindowModule,
    MatButtonModule,
    MatMenuModule,
    SectionElementModule,
    StickyLayoutModule,
    TextAreaElementModule,
    TextBoxElementModule,
    TextPropertyWindowModule,
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

    this._formBuilderRegistryService.register('TextBox', {
      elementType: TextBoxElementComponent,
      windowType: TextPropertyWindowComponent,
    });

    this._formBuilderRegistryService.register('TextArea', {
      elementType: TextAreaElementComponent,
      windowType: TextPropertyWindowComponent,
    });
  }
}
