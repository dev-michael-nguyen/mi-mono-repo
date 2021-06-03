import { Component, Input } from '@angular/core';

@Component({
  selector: 'silo-preview-article',
  templateUrl: './preview-article.component.html',
  styleUrls: ['./preview-article.component.scss'],
})
export class PreviewArticleComponent {
  @Input()
  linkRoute: string | Array<string>;
}
