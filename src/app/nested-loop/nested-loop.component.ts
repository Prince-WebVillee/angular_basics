import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.scss'],
})
export class NestedLoopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users = [
    {
      name: 'Stefen',
      age: 24,
      city: 'London',
      socialAccounts: ['facebook', 'twitter', 'youtube'],
    },
    {
      name: 'Damon',
      age: 25,
      city: 'California',
      socialAccounts: ['facebook', 'twitter', 'instagram'],
    },
    {
      name: 'Jhon',
      age: 20,
      city: 'Canada',
      socialAccounts: ['facebook', 'twitter', 'youtube'],
    },
  ];
}
