import { Component, OnInit, Input } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'angular-preload-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  @Input() obs$: any;

  constructor() { }

  // dogs are quick to load
  dogs$ = of(1).pipe(delay(1000));

  // turtles are sloooow to load
  turtles$ = of(0).pipe(delay(5000));

  // some cats are fast, some cats are slow
  cats$ = of(0).pipe(
    delay(this.randomDelay(1000, 5000))
  );

  ngOnInit(): void {}

  private randomDelay(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
  }

}
