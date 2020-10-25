import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ENABLE_SW, InitApplicationServiceProvider, IS_PRODUCTION, OfflineModule, SERVICE_WORKER_CONFIG } from '@mi-mono-repo/mi-angular-ui';
import { environment } from '../environments/environment';
import { ExperienceViewComponent } from '../views/experience-view/experience-view.component';
import { ExperienceViewModule } from '../views/experience-view/experience-view.module';
import { ResumeViewComponent } from '../views/resume-view/resume-view.component';
import { ResumeViewModule } from '../views/resume-view/resume-view.module';
import { SkillViewComponent } from '../views/skill-view/skill-view.component';
import { SkillViewModule } from '../views/skill-view/skill-view.module';
import { AppComponent } from './app.component';

const routes = [
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
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ExperienceViewModule,
    OfflineModule,
    ResumeViewModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    SkillViewModule,
  ],
  providers: [
    InitApplicationServiceProvider,
    {
      provide: IS_PRODUCTION,
      useValue: environment.production
    },
    {
      provide: ENABLE_SW,
      useValue: environment.enableSw
    },
    {
      provide: SERVICE_WORKER_CONFIG, useValue: {
        file: './service-worker.js',
        registerOptions: {},
        additionalManifestUrls: []
      }
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
