import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleArticleComponent } from './example-article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExampleArticleComponent],
  exports: [ExampleArticleComponent],
})
export class ExampleArticleModule { }
