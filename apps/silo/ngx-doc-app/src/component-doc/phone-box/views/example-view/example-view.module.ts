import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhoneBoxModule } from '@silo/ngx';
import { ExampleArticleModule } from '../../../../components/example-article/example-article.module';
import { ExampleViewComponent } from './example-view.component';

@NgModule({
  imports: [CommonModule, ExampleArticleModule, PhoneBoxModule],
  declarations: [ExampleViewComponent],
})
export class ExampleViewModule {}
