import { Component, OnInit } from '@angular/core';
// import { Employee } from './models/employee';

interface Employee {
  name: string;
  age: number;
  selected?: boolean;
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
  employees: Array<Employee> = [
    {
      name: 'Vineeth',
      age: 34
    },
    {
      name: 'Vipin',
      age: 32
    }
  ];

  swapMe() {
    this.name = 'Thalappala';
  }

  clearSelections() {
    this.employees.forEach(e => e.selected = false);
  }

  showDetails(employee: Employee) {
    this.clearSelections();
    employee.selected = true;
    this.selectedEmployee = employee;
  }

  onButtonClick() {
    this.myInputVal = 'Hello';
  }

  addEmployee() {
    this.employees.push(this.newEmployee);
  }

  deleteEmp(emp) {
    this.employees.splice(emp, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
