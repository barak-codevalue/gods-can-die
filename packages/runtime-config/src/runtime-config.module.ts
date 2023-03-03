import { APP_INITIALIZER, NgModule } from '@angular/core';

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
}

export async function loadConfig(options: ConfigOptions): Promise<Config> {
  let config = options.config ?? {};
  if (options.configUrl) {
    const response = await fetch(options.configUrl);
    const responseConfig = await response.json();
    config = { ...responseConfig, ...config };
  }
  (window as unknown as ConfigWindow).appConfig = config;
  return config;
}

export interface ConfigOptions {
  configUrl?: string;
  config?: Record<string, unknown>;
}

export interface FeatureConfigOptions {
  feature: string;
}

export interface Config {
  [key: string]: unknown;
}

export interface ConfigWindow extends Window {
  appConfig: Config;
}
