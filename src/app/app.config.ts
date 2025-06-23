import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

// DÜZƏLİŞ 1: HttpClient-ı import edirik
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),

    // DÜZƏLİŞ 2: HttpClient-ı bütün proqram üçün aktiv edirik
    provideHttpClient(),
  ],
};
