import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MicroFrontendComponent } from './app/micro-frontend/micro-frontend.component';

if (environment.production) {
  try {
    enableProdMode();
  } catch(e) {
    // enableProdMode() can only be called once, so swallow the error here - another
    // Angular element may have already called this function.
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Note: web component class is exported so users have access to the types, API and docs when using
// it in their app  
export { MicroFrontendComponent };
