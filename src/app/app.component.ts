import { Component, OnInit, inject } from '@angular/core';
import { CONFIG } from './app.module';

@Component({
  selector: 'gods-can-die-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  protected readonly config = inject(CONFIG);
  title = 'gods-can-die';

  ngOnInit(): void {
    console.log('root', this.config);
  }
}
