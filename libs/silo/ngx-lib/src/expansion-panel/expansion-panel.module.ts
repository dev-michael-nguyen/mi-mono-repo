import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelComponent } from './expansion-panel.component';

@NgModule({
  imports: [CommonModule, MatExpansionModule],
  declarations: [ExpansionPanelComponent],
  exports: [ExpansionPanelComponent],
})
export class ExpansionPanelModule {}
