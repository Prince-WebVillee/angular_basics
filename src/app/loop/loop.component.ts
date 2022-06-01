import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss'],
})
export class LoopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'For Loop';
  users = ['Stefen', 'Damon', 'Jhon', 'Mark'];
  userDetails = [
    { name: 'Stefen', age: 24, city: 'London' },
    { name: 'Damon', age: 25, city: 'California' },
    { name: 'Jhon', age: 26, city: 'Canada' },
  ];
}
