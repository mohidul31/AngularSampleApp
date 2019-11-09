import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  userList: any[];
  constructor(private h:Http) { 
    
  }

  ngOnInit() {
    this.h.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(r=> {
      this.userList=r.json();
      //console.log(r.json());
    })
  }

}
