import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  getMetadataIdentifier,
  isPropertyMetadataApplicator,
  MetadataModel,
  PropertyMetadata,
} from '@silo/metadata';
import { TemplateRegistryConfig } from '../models/template-registry-config';
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
    private _metadataTemplateRegistryService: MetadataTemplateRegistryService,
  ) {}

  ngOnInit() {
    const metadataIdentifier = getMetadataIdentifier(this.metadataModel);
    const rootMetadata = this.metadataModel.metadataMap[metadataIdentifier];
    Object.entries(rootMetadata.propertyMetadataMap).forEach(
      ([propertyKey, propertyMetadata]) => {
        const templateRegistryConfig = this._metadataTemplateRegistryService.get(
          propertyMetadata.templateIdentifier,
        );
        const propertyValue = this.metadataModel[propertyKey];
        this.createComponent(
          templateRegistryConfig,
          propertyMetadata,
          propertyValue,
        );
      },
    );
  }

  createComponent(
    templateRegistryConfig: TemplateRegistryConfig,
    propertyMetadata: PropertyMetadata,
    propertyValue: unknown,
  ): void {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(
      templateRegistryConfig.componentType,
    );
    const componentRef = this.viewContainerRef.createComponent(
      componentFactory,
    );

    if (isPropertyMetadataApplicator(componentRef.instance)) {
      componentRef.instance.applyPropertyMetadata(
        propertyMetadata,
        propertyValue,
      );
      componentRef.changeDetectorRef.detectChanges();
    }
  }
}
