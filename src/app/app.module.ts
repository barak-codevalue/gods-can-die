import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HallOfFameModule } from '@packages/hall-of-fame';
import { SettingsModule } from '@packages/settings';
import { RuntimeConfigModule } from '@packages/packages/runtime-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HallOfFameModule,
    SettingsModule,
    RuntimeConfigModule.forRoot({
      config: {
        test1: 'test1',
        hallOfFame: {
          test2: 'test2',
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
