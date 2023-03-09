export interface ConfigOptions {
  configUrl?: string;
  config?: Record<string, unknown>;
}

export interface FeatureConfigOptions extends ConfigOptions {
  featureKey: string;
}

export interface Config {
  [key: string]: unknown;
}

export interface ConfigWindow extends Window {
  appConfig: Config;
}
