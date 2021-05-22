import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MetadataModel, PropertyMetadata } from '@silo/metadata';
import { FormElementNodeModelExtensions } from '../../form-builder/models/form-element-node-model';
import { TemplateRegistryConfig } from '../models/template-registry-config';
import { MetadataFormService } from '../services/metadata-form.service';
import { MetadataTemplateRegistryService } from '../services/metadata-template-registry.service';

@Component({
  selector: 'silo-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.scss'],
})
export class MetadataFormComponent implements OnInit {
  @Input()
  metadataModel: MetadataModel;

  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _metadataFormService: MetadataFormService,
    private _metadataTemplateRegistryService: MetadataTemplateRegistryService,
  ) {}

  ngOnInit() {
    const formDefinitionModel = this._metadataFormService.createFormDefinition(
      this.metadataModel,
    );

    const rootNode = FormElementNodeModelExtensions.mapFromFormDefinitionModel(
      formDefinitionModel,
      formDefinitionModel.rootMemberKey,
    );

    rootNode.forEach((node) => {
      const templateRegistryConfig = this._metadataTemplateRegistryService.get(
        node.definitionModel.templateIdentifier,
      );
      this.createComponent(
        templateRegistryConfig,
        node.definitionModel,
        node.definitionModel.defaultValue,
      );
    });
  }

  createComponent(
    templateRegistryConfig: TemplateRegistryConfig,
    propertyMetadata: PropertyMetadata,
    propertyValue: unknown,
  ): void {
    if (!templateRegistryConfig) {
      console.warn('No template registry config.');
      return;
    }

    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(
      templateRegistryConfig.componentType,
    );
    const componentRef = this.viewContainerRef.createComponent(
      componentFactory,
    );

    Object.assign(componentRef.instance, propertyMetadata);
    (componentRef.instance as PropertyMetadata).defaultValue = propertyValue;
    componentRef.changeDetectorRef.detectChanges();
  }
}
