import { NgModule } from '@angular/core';
import { KeyboardClickDirective } from './keyboard-click.directive';

@NgModule({
  declarations: [KeyboardClickDirective],
  exports: [KeyboardClickDirective],
})
export class KeyboardClickModule {}
