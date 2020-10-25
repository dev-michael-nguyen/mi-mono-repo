import { Component, OnInit } from '@angular/core';
import { INavigationLink } from '../../components/navigation-side-bar/navigation-side-bar.component';

@Component({
  selector: 'mi-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  links: Array<INavigationLink> = [
    { path: 'experience', matIcon: 'work', displayName: 'Experiences' },
    { path: 'skill', matIcon: 'handyman', displayName: 'Skills' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
