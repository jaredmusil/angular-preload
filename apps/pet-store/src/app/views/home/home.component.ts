import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-preload-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  constructor(
    private router: Router,
  ) {

  }
}
