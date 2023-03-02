import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { SettingsModule } from '@gods-can-die/settings';
import { HallOfFameModule } from '@gods-can-die/hall-of-fame';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    SettingsModule,
    HallOfFameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
