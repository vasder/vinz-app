import { Component, OnInit } from '@angular/core';
interface Employee {
  name: string;
  age: number;
  selected ?: boolean;
}
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  name = 'Vineeth';
  buttonTitle = 'this is button';
  selectedEmployee;
  myInputVal = 'Hello World!!';

  newEmployee: Employee = {
    name: '',
    age: null
  };

  employees: Array<object> = [
    {
      name: 'Vineeth',
      age: '34'
    },
    {
      name: 'Sonia',
      age: '32'
    }
  ];

  abc() {
    this.name = 'Thalappala';
  }
  showDetails(employee) {
    this.clearSelection();
    employee.selected = true;
    this.selectedEmployee = employee;
  }
  onButtonClick() {
    this.myInputVal = 'Hello';
  }
  addEmployee() {
    this.employees.push(this.newEmployee);
  }

  clearSelection() {
    this.employees.forEach(emp => emp.selected = false);
  }
  constructor() { }

  ngOnInit() {
  }

}
