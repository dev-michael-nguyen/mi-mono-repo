import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PreviewArticleComponent } from './preview-article.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  declarations: [PreviewArticleComponent],
  exports: [PreviewArticleComponent],
})
export class PreviewArticleModule {}
