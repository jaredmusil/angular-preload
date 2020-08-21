import { Component, OnInit, Input } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { loading } from '@angular-preload/utils'

@Component({
  selector: 'angular-preload-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  @Input() obs$: Observable;

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

  randomDelay(bottom, top) {
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
  }

}
