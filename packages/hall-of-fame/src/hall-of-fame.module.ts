import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { RuntimeConfigModule } from '@packages/packages/runtime-config';

@NgModule({
  imports: [CommonModule,
    RuntimeConfigModule.forFeature({
      feature: 'hallOfFame',
    })],
  declarations: [BoardComponent],
  exports: [BoardComponent],
})
export class HallOfFameModule {}
