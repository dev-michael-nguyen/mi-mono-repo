import { Component, Input } from '@angular/core';

export interface ITimelineArticle {
  title: string;
  timestamp: string;
  paragraphs: Array<string>;
}

@Component({
  selector: 'mi-resume-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent {

  @Input() articles: Array<ITimelineArticle> = [];
  @Input() dense = false;

}
