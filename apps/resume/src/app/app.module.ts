import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ExperienceViewComponent } from '../views/experience-view/experience-view.component';
import { ExperienceViewModule } from '../views/experience-view/experience-view.module';
import { ResumeViewComponent } from '../views/resume-view/resume-view.component';
import { ResumeViewModule } from '../views/resume-view/resume-view.module';
import { SkillViewComponent } from '../views/skill-view/skill-view.component';
import { SkillViewModule } from '../views/skill-view/skill-view.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ExperienceViewModule,
    ResumeViewModule,
    SkillViewModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'resume',
        },
        {
          path: 'resume',
          component: ResumeViewComponent,
          children: [
            {
              path: '',
              pathMatch: 'full',
              redirectTo: 'experience',
            },
            {
              path: 'experience',
              component: ExperienceViewComponent
            },
            {
              path: 'skill',
              component: SkillViewComponent
            }
          ]
        }
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
