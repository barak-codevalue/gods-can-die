import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import {
  createModuleConfigInjectionToken,
  Config,
} from '@packages/packages/runtime-config';
@NgModule({
  imports: [CommonModule],
  declarations: [BoardComponent],
  exports: [BoardComponent],
})
export class HallOfFameModule {}

export const CONFIG = createModuleConfigInjectionToken<Config>(
  'hallOfFameModuleConfig',
  'hallOfFame'
);
