import { Component, OnInit, inject } from '@angular/core';
import { CONFIG } from '../settings.module';

@Component({
  selector: 'settings-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  config = inject(CONFIG);
  configJson = JSON.stringify(this.config, null, 2);

  ngOnInit(): void {
    console.log('settings', this.config);
  }
}
