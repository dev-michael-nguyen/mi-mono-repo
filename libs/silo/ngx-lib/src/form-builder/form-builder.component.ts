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
  ImportFormEvent,
  RemoveFormElementEvent,
} from './models/form-builder-events';
import { FormDefinitionModel } from './models/form-definition-model';
import {
  FormBuilderType,
  FormElementTemplateIdentifier,
} from './models/form-definition-types';
import {
  FormElementNodeModel,
  FormElementNodeModelExtensions,
} from './models/form-element-node-model';

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
  type: FormBuilderType;

  @Output()
  handleEvent = new EventEmitter<FormBuilderEvent>();

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.render(this.formDefinitionModel, this.memberKeyList);
  }

  render(
    formDefinitionModel: FormDefinitionModel,
    memberKeyList: Array<string>,
  ) {
    this.formDefinitionModel = formDefinitionModel;
    this.memberKeyList = memberKeyList;
    this.nodeModelList = memberKeyList.map((memberKey) =>
      FormElementNodeModelExtensions.mapFromFormDefinitionModel(
        formDefinitionModel,
        memberKey,
      ),
    );
  }

  rerender() {
    this.render(this.formDefinitionModel, this.memberKeyList);
  }

  setActiveNode(nodeModel: FormElementNodeModel) {
    if (this.activeNodeModel) {
      this.activeNodeModel.state.isActive = false;
    }
    nodeModel.state.isActive = true;
    this.activeNodeModel = nodeModel;
    this.lastActiveDefinitionKey$.next(nodeModel.definitionKey);
  }

  addElement(type: FormElementTemplateIdentifier) {
    const event = new AddFormElementEvent();
    event.type = type;
    // if active node is not a group, add as a child to parent which should be a group
    // else, add as child to active node
    event.parentMemberKey =
      this.activeNodeModel.definitionModel.category != 'Group'
        ? this.activeNodeModel.parentMemberKey
        : this.activeNodeModel.memberKey;
    this.handleEvent.next(event);
  }

  removeElement(nodeModel: FormElementNodeModel): void {
    const event = new RemoveFormElementEvent();
    event.memberKey = nodeModel.memberKey;
    this.handleEvent.next(event);
  }

  editProperties() {
    const propertyWindow = this._elementRef.nativeElement.querySelector(
      `[class*='-property-window'`,
    ) as HTMLElement;
    AutoFocusDirective.focusFirstFocusable(propertyWindow);
  }

  importFormDefinition() {
    const fileInput = document.createElement('INPUT') as HTMLInputElement;
    fileInput.setAttribute('type', 'file');
    fileInput.oninput = () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (fileReaderEvent) => {
          const formDefinitionJson = fileReaderEvent.target.result as string;
          const event = new ImportFormEvent();
          event.formDefinitionJson = formDefinitionJson;
          this.handleEvent.next(event);
        };
      }
    };
    fileInput.click();
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
