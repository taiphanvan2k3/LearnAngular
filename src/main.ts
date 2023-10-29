import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// bootstrapModule dùng để khởi động 1 module và cụ thể ở đây là AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
