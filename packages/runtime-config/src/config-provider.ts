import { InjectionToken } from '@angular/core';
import { Config, ConfigOptions, ConfigWindow } from './types';
import { merge } from 'lodash';

function appConfigFactory(): Config {
  return (window as unknown as ConfigWindow).appConfig || {};
}

export function createAppConfigInjectionToken<T extends object>(
  tokenKey: string
) {
  return new InjectionToken<T>(tokenKey, {
    providedIn: 'root',
    factory: () => {
      const appConfig = appConfigFactory();
      return appConfig as T;
    },
  });
}

export function createModuleConfigInjectionToken<T extends object>(
  tokenKey: string,
  moduleKey: string
) {
  return new InjectionToken<T>(tokenKey, {
    providedIn: 'root',
    factory: () => {
      const appConfig = appConfigFactory();
      const config = appConfig?.[moduleKey] ?? {};
      return config as T;
    },
  });
}

export async function loadConfig(options: ConfigOptions): Promise<void> {
  let config = { ...options.config };
  if (options.configUrl) {
    try {
      const response = await fetch(options.configUrl);
      const responseConfig = await response.json();
      config = merge(responseConfig, config);
    } catch (error) {
      console.log(error);
    }
  }
  (window as unknown as ConfigWindow).appConfig = config;
}
