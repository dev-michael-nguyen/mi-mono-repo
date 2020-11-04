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
    label: text('label', 'Curabitur aliquet quam id dui posuere blandit.'),
    placeholder: text('placeholder', 'Donec rutrum congue leo eget malesuada.'),
    hint: text('hint', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.'),
    value: text('value', 'Curabitur aliquet quam id dui posuere blandit.'),
    required: boolean('required', true),
  }
}); 