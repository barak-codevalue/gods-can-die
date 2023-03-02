import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';

@NgModule({
  imports: [],
})
export class RuntimeConfigModule {
  static forRoot(options: RootConfigOptions) {
    return {
      ngModule: RuntimeConfigModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => () => loadConfig(options),
          multi: true,
        },
        {
          provide: CONFIGURATION,
          useFactory: () => configFactory(),
        },
      ],
    };
  }

  static forFeature(options: FeatureConfigOptions) {
    return {
      ngModule: RuntimeConfigModule,
      providers: [
        {
          provide: CONFIGURATION,
          useFactory: () => () => configFactory(options.feature),
        },
      ],
    };
  }
}

export const CONFIGURATION = new InjectionToken<Config>('Config');

const configFactory = (feature?: string): Config => {
  const appConfig = (window as unknown as ConfigWindow).appConfig;
  if (feature) {
    return appConfig[feature] as Config;
  }
  return appConfig;
};

export async function loadConfig(options: RootConfigOptions) {
  let config = options.config ?? {};
  if (options.configUrl) {
    const response = await fetch(options.configUrl);
    const responseConfig = await response.json();
    config = { ...responseConfig, ...config };
  }
  (window as unknown as ConfigWindow).appConfig = config;
}

export interface RootConfigOptions {
  configUrl?: string;
  config?: Record<string, unknown>;
}

export interface FeatureConfigOptions {
  feature: string;
}

export interface Config {
  [key: string]: unknown;
}

interface ConfigWindow extends Window {
  appConfig: Config;
}
