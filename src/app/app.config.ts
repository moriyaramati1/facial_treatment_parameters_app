import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient()]
};

export const SERVER_URL ='https://script.google.com/macros/s/AKfycbyqHcHtZkCmrqXXZfxWNwYAT2NPDdrCrQMxS8o5ow0sYy780lD-T5amux0nrs9DT5zyQw/exec';
