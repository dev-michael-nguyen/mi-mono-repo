import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AutoFocusDirective } from '../directives/auto-focus/auto-focus.directive';
import {
  AddFormElementEvent,
  FormBuilderEvent,
} from './models/form-builder-events';
import { FormDefinitionModel } from './models/form-definition-model';
import {
  FormBuilderMode,
  FormElementDefinitionType,
} from './models/form-definition-types';
import { FormElementNodeModel } from './models/form-element-node-model';

@Component({
  selector: 'silo-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  nodeModelList: Array<FormElementNodeModel> = [];

  lastActiveDefinitionKey$ = new BehaviorSubject<string>(null);
  activeNodeModel: FormElementNodeModel;

  /**
   * The form definition model.
   */
  @Input()
  formDefinitionModel: FormDefinitionModel;

  /**
   * The list of member key to render.
   */
  @Input()
  memberKeyList: Array<string> = [];

  @Input()
  mode: FormBuilderMode;

  @Output()
  handleEvent = new EventEmitter<FormBuilderEvent>();

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.setNodeModelList();
  }

  setNodeModelList() {
    this.nodeModelList = this.memberKeyList.map((memberKey) =>
      FormElementNodeModel.mapFromMemberKey(
        this.formDefinitionModel,
        memberKey,
      ),
    );
  }

  setActiveNode(nodeModel: FormElementNodeModel) {
    if (this.activeNodeModel) {
      this.activeNodeModel.state.isActive = false;
    }
    nodeModel.state.isActive = true;
    this.activeNodeModel = nodeModel;
    this.lastActiveDefinitionKey$.next(nodeModel.definitionKey);
  }

  addElement($event: Event, type: FormElementDefinitionType) {
    $event.stopPropagation();
    const event = new AddFormElementEvent();
    event.type = type;
    event.parentMemberKey = this.activeNodeModel.memberKey;
    this.handleEvent.next(event);
  }

  editProperties() {
    const propertyWindow = this._elementRef.nativeElement.querySelector(
      // eslint-disable-next-line quotes
      "[class*='-property-window'",
    ) as HTMLElement;
    AutoFocusDirective.focusFirstFocusable(propertyWindow);
  }

  exportFormDefinition() {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(this.formDefinitionModel)], {
      type: 'json',
    });
    a.href = URL.createObjectURL(file);
    a.download = 'form-definition.json';
    a.click();
  }
}
