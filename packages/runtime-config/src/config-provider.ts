import { InjectionToken } from '@angular/core';
import { Config, ConfigWindow } from '.';

const appConfigFactory = (): Config =>
  (window as unknown as ConfigWindow).appConfig || {};

export function createAppConfigInjectionToken<T extends object>(
  tokenKey: string
) {
  return new InjectionToken<T>(tokenKey, {
    providedIn: 'root',
    factory: () => {
      const appConfig = appConfigFactory();
      const config = appConfig ?? {};
      return config as T;
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
