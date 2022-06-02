import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-element',
  templateUrl: './toggle-element.component.html',
  styleUrls: ['./toggle-element.component.scss'],
})
export class ToggleElementComponent implements OnInit {
  display = true;

  toggleData = () => {
    this.display = !this.display;
  };
  constructor() {}

  ngOnInit(): void {}
}
