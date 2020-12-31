import { boolean, text } from '@storybook/addon-knobs';
import { TextBoxComponent } from './text-box.component';
import { TextBoxModule } from './text-box.module';

export default {
  title: 'TextBoxComponent'
};

export const Primary = () => ({
  moduleMetadata: {
    imports: [
      TextBoxModule,
    ]
  },
  component: TextBoxComponent,
  props: {
    label: text('label', 'Primary'),
    required: boolean('required', true),
  }
}); 