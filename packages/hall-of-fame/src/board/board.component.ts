import { Component, OnInit, inject } from '@angular/core';
import { CONFIGURATION } from '@packages/packages/runtime-config';

@Component({
  selector: 'hall-of-fame-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  private readonly config = inject(CONFIGURATION);

  ngOnInit(): void {
    console.log('BoardComponent', this.config);
  }
}
