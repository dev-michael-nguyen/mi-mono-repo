import { NgModule } from '@angular/core';
import { SiloAutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations: [SiloAutoFocusDirective],
  exports: [SiloAutoFocusDirective],
})
export class SiloAutoFocusModule {}
