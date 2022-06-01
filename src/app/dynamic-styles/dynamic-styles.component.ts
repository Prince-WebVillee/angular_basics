import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-styles',
  templateUrl: './dynamic-styles.component.html',
  styleUrls: ['./dynamic-styles.component.scss'],
})
export class DynamicStylesComponent implements OnInit {
  color = 'red';
  bgcolor = 'green';
  updateColor = () => {
    this.color = 'blue';
    
  };
  constructor() {}

  ngOnInit(): void {}
}
