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
import { FormBuilderComponent } from '../form-builder.component';
import { IFormElementComponent } from '../models/form-element-component-interface';
import { FormElementNodeModel } from '../models/form-element-node-model';
import { FormBuilderRegistryService } from '../services/form-builder-registry.service';

@Component({
  selector: 'silo-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss'],
})
export class FormElementComponent
  implements OnInit, OnChanges, OnDestroy, IFormElementComponent {
  @Input()
  nodeModel: FormElementNodeModel;

  @ViewChild(CdkPortalOutlet, { static: true })
  portalOutlet: CdkPortalOutlet;

  constructor(
    private _formBuilderRegistryService: FormBuilderRegistryService,
    private _formBuilderComponent: FormBuilderComponent,
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
    const componentPortal = new ComponentPortal(config.elementType);
    this.portalOutlet.attachComponentPortal(componentPortal);
    const componentRef = this.portalOutlet
      .attachedRef as ComponentRef<IFormElementComponent>;
    componentRef.instance.nodeModel = this.nodeModel;
  }

  setActiveNode() {
    this._formBuilderComponent.setActiveNode(this.nodeModel);
  }

  ngOnDestroy() {
    this.portalOutlet.dispose();
  }
}
