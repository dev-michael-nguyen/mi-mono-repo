import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ResponsiveContainerModule } from '../../../responsive/responsive-container/responsive-container.module';
import { LabelModule } from '../../label/label.module';
import { SingleAutocompleteComponent } from './single-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    LabelModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    ResponsiveContainerModule,
  ],
  declarations: [SingleAutocompleteComponent],
  exports: [SingleAutocompleteComponent],
})
export class SingleAutocompleteModule {}
