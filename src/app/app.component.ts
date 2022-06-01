import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_basics';
  data = ['movies', 'webseries'];
  show = true;
  displayVal = '';
  color = 'blue';
  result = this.data.map((val) => val);
  add = (x: any, y: any) => {
    alert(x + y);
    console.log(x + y);
  };
  getValue = (e: any) => {
    console.log(e);
    this.displayVal = e;
  };
  changeVal = () => {
    this.show = false;
  };
}
