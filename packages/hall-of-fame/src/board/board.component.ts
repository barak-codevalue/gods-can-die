import { Component, OnInit, inject } from '@angular/core';
import { CONFIG } from '../core/injectors';

@Component({
  selector: 'hall-of-fame-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  protected readonly config = inject(CONFIG);

  ngOnInit(): void {
    console.log('BoardComponent', this.config);
  }
}
