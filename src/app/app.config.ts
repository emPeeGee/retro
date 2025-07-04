import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideRdxDialogConfig } from '@radix-ng/primitives/dialog';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './core/interceptors/base-url-interceptor';
// TODO: import from feature is not good
import { AuthStore } from './features/auth/auth.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideRdxDialogConfig(),
    provideHttpClient(withInterceptors([baseUrlInterceptor])),
    AuthStore,
  ],
};
