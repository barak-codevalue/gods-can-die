import { Component, OnInit, inject } from '@angular/core';
import { CONFIGURATION } from '@packages/packages/runtime-config';

@Component({
  selector: 'gods-can-die-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly config = inject(CONFIGURATION);
  title = 'gods-can-die';

  ngOnInit(): void {
    console.log(this.config);
  }
}
