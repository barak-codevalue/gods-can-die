import { Component, OnInit, inject } from '@angular/core';
import { CONFIG } from '../hall-of-fame.module';

@Component({
  selector: 'hall-of-fame-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  private readonly config = {}; //inject(CONFIG_MODULE);

  configJson = JSON.stringify(this.config, null, 2);

  ngOnInit(): void {
    console.log('BoardComponent', this.config);
  }
}
