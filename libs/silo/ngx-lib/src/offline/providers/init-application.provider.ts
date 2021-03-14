import { APP_INITIALIZER, Provider } from '@angular/core';
import { ApplicationService } from '../application.service';

export function initApplicationService(applicationService: ApplicationService) {
  return () =>
    applicationService.isReady().subscribe(
      () => console.log('Application service is ready.'),
      (e) => console.log('Could not initialize application service.', e),
    );
}
export const InitApplicationServiceProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApplicationService,
  deps: [ApplicationService],
  multi: true,
};
