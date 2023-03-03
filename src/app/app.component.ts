import { Component, OnInit, inject } from '@angular/core';
import { CONFIG } from './app.module';

@Component({
  selector: 'gods-can-die-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly config = inject(CONFIG);
  configJson = JSON.stringify(this.config, null, 2);
  title = 'gods-can-die';

  ngOnInit(): void {
    console.log('root', this.config);
  }
}
