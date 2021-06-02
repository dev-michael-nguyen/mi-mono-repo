import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ExampleArticleModule } from '../../../components/example-article/example-article.module';
import { ExampleViewComponent } from './example-view.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleArticleModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
  ],
  declarations: [ExampleViewComponent],
})
export class ExampleViewModule {}
