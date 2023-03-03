import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { Config, createModuleConfigInjectionToken } from '@packages/packages/runtime-config';
@NgModule({
  imports: [CommonModule],
  declarations: [UserSettingsComponent],
  exports: [UserSettingsComponent],
})
export class SettingsModule {}

export const CONFIG = createModuleConfigInjectionToken<Config>(
  'settingsModuleConfig',
  'settings'
);