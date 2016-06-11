import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SampleappangularAppComponent, environment } from './app/';
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http';
import { JokeService} from './app/shared/services/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(SampleappangularAppComponent, [
	HTTP_PROVIDERS,
	JokeService
	]);

