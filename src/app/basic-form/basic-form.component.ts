import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  userData: any = {};
  getData = (data: NgForm) => {
    this.userData = data;
    console.log(this.userData);
  };
  ngOnInit(): void {}
}
