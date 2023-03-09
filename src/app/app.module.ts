import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HallOfFameModule } from '@packages/hall-of-fame';
import { SettingsModule } from '@packages/settings';
import {
  Config,
  RuntimeConfigModule,
  createAppConfigInjectionToken,
} from '@packages/packages/runtime-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HallOfFameModule,
    SettingsModule,
    RuntimeConfigModule.forRoot({
      configUrl: 'configs/app-config.json',
      config: {
        localProp: 'localValue',
        hallOfFame: { localProp: 'localValue' },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export const CONFIG = createAppConfigInjectionToken<Config>('APP_CONFIG');
