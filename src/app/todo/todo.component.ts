import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  listArr: any[] = [];
  addTask = (data: string) => {
    console.log(data.length);
if(data.length !== 0){
    if (this.listArr.some((x: any) => x.task === data.toLowerCase())) {
      alert('Task already exists');
    } else {
      this.listArr.push({
        id: this.listArr.length + 1,
        task: data,
      });
      console.log(this.listArr);
    }
  }
  else{

    alert('Please enter a task');
  }
  }

  removeTask = (id: number) => {
    this.listArr = this.listArr.filter((val) => val.id !== id);
    console.log(this.listArr);
  };

  ngOnInit(): void {}
}
