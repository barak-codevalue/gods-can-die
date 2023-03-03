export interface Config {
  [key: string]: unknown;
}

export interface ConfigWindow extends Window {
  appConfig: Config;
}

export interface ConfigOptions {
  configUrl?: string;
  config?: Record<string, unknown>;
}
