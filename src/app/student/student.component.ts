import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Alert } from 'selenium-webdriver';

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
    .subscribe(response=> {
      this.userList=response.json();
      //console.log(r.json());
    })
  }
  AddStudent(inputName){
    let student ={name: inputName.value };
    this.h.post('https://jsonplaceholder.typicode.com/users',student)
    .subscribe(response=> {
      this.userList.splice(0,0,student);
    })
  }
  DeleteStudent(std){
    this.h.delete('https://jsonplaceholder.typicode.com/users'+"/"+std.id)
    .subscribe(response=> {
      alert("Delete Respone Received "+ response);
    })
  }

}
