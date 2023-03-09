import {
  APP_INITIALIZER,
  ENVIRONMENT_INITIALIZER,
  NgModule,
} from '@angular/core';
import { ConfigOptions } from './types';
import { loadConfig } from './config-provider';

@NgModule({
  imports: [],
})
export class RuntimeConfigModule {
  static forRoot(options: ConfigOptions) {
    return {
      ngModule: RuntimeConfigModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => () => loadConfig(options),
          multi: true,
        },
      ],
    };
  }

  static forFeature(options: ConfigOptions) {
    return {
      ngModule: RuntimeConfigModule,
      providers: [
        {
          provide: ENVIRONMENT_INITIALIZER,
          useFactory: () => () =>
            console.log('ENVIRONMENT_INITIALIZER', options),
          multi: true,
        },
      ],
    };
  }
}
