import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  newStudent: Student = new Student('', null);
  students: Array<Student> = [];
  buttons: Array<String> = ['View Student', 'Details'];

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    alert('Menu clicked');
  }
}
