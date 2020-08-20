import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-preload-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})
export class PreferencesComponent {
  
  constructor(
    private router: Router,
  ) {

  }
}
