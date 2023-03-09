import { createModuleConfigInjectionToken } from '@packages/packages/runtime-config';

export const CONFIG = createModuleConfigInjectionToken(
  'hallOfFameModuleConfig',
  'hallOfFame'
);
