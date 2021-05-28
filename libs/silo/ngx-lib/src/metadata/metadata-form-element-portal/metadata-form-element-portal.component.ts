import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PropertyMetadata } from '@silo/metadata';
import { IFormElementComponent } from '../../form-builder/models/form-element-component-interface';
import { FormElementNodeModel } from '../../form-builder/models/form-element-node-model';
import { MetadataTemplateRegistryService } from '../services/metadata-template-registry.service';

@Component({
  selector: 'silo-metadata-form-element-portal',
  templateUrl: './metadata-form-element-portal.component.html',
  styleUrls: ['./metadata-form-element-portal.component.scss'],
})
export class MetadataFormElementPortalComponent
  implements OnInit, OnChanges, OnDestroy, IFormElementComponent {
  @Input()
  nodeModel: FormElementNodeModel;

  @ViewChild(CdkPortalOutlet, { static: true })
  portalOutlet: CdkPortalOutlet;

  constructor(
    private _metadataTemplateRegistryService: MetadataTemplateRegistryService,
  ) {}

  ngOnInit() {
    this.attachComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.nodeModel &&
      !changes.nodeModel.isFirstChange() &&
      changes.nodeModel.currentValue
    ) {
      this.attachComponent();
      console.log('test');
    }
  }

  attachComponent() {
    if (this.portalOutlet.hasAttached()) {
      this.portalOutlet.detach();
    }

    const config = this._metadataTemplateRegistryService.get(
      this.nodeModel.definitionModel.templateIdentifier,
    );

    if (!config?.metadataComponent) {
      return;
    }

    this.portalOutlet.attachComponentPortal(
      new ComponentPortal(config.metadataComponent),
    );

    const componentRef = this.portalOutlet.attachedRef as ComponentRef<unknown>;
    Object.assign(componentRef.instance, this.nodeModel.definitionModel);
    (componentRef.instance as PropertyMetadata).defaultValue = this.nodeModel.definitionModel.defaultValue;
    componentRef.changeDetectorRef.detectChanges();

    this.nodeModel.state.elementComponentRef = componentRef;
  }

  ngOnDestroy() {
    this.portalOutlet.dispose();
  }
}
