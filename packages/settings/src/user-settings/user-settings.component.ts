import { Component, OnInit, inject } from '@angular/core';
import { CONFIG } from '../core/injectors';

@Component({
  selector: 'settings-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  protected readonly config = inject(CONFIG);

  ngOnInit(): void {
    console.log('settings', this.config);
  }
}
