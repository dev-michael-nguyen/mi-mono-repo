import { Component } from '@angular/core';
import { ITimelineArticle } from '../../components/vertical-timeline/vertical-timeline.component';

@Component({
  selector: 'mi-resume-experience-view',
  templateUrl: './experience-view.component.html',
  styleUrls: ['./experience-view.component.scss']
})
export class ExperienceViewComponent {

  timelineArticles: Array<ITimelineArticle> = [
    {
      title: 'Job Title @ Company Name, City, State',
      timestamp: 'Month, Year - Month, Year',
      paragraphs: [
        '- Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        '- Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.'
      ]
    },
    {
      title: 'Job Title @ Company Name, City, State',
      timestamp: 'Month, Year - Month, Year',
      paragraphs: [
        '- Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit.',
        '- Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'
      ]
    }
  ];

}
