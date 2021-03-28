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
import { IFormElementComponent } from '../models/form-element-component-interface';
import { FormElementNodeModel } from '../models/form-element-node-model';
import { FormBuilderRegistryService } from '../services/form-builder-registry.service';

@Component({
  selector: 'silo-form-element-property-window',
  templateUrl: './form-element-property-window.component.html',
  styleUrls: ['./form-element-property-window.component.scss'],
})
export class FormElementPropertyWindowComponent
  implements OnInit, OnChanges, OnDestroy, IFormElementComponent {
  @Input()
  nodeModel: FormElementNodeModel;

  @ViewChild(CdkPortalOutlet, { static: true })
  portalOutlet: CdkPortalOutlet;

  constructor(
    private _formBuilderRegistryService: FormBuilderRegistryService,
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
    }
  }

  attachComponent() {
    if (!this.nodeModel?.definitionModel?.type) {
      throw new Error('Element definition type is required');
    }

    if (this.portalOutlet.hasAttached()) {
      this.portalOutlet.detach();
    }

    const config = this._formBuilderRegistryService.get(
      this.nodeModel.definitionModel.type,
    );
    const componentPortal = new ComponentPortal(config.windowType);
    this.portalOutlet.attachComponentPortal(componentPortal);

    const componentRef = this.portalOutlet
      .attachedRef as ComponentRef<IFormElementComponent>;
    componentRef.instance.nodeModel = this.nodeModel;
  }

  ngOnDestroy() {
    this.portalOutlet.dispose();
  }
}
