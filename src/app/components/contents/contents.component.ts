import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../employee.service';

// interface Employee {
//   name: string;
//   age: number;
//   selected?: boolean;
// }

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

  activeViewIndex = 0;
  newEmployee: Employee = new Employee('', null);
  employees: Array<Employee> = [];
  menuList: Array<string> = ['Home', 'About', 'Products'];
  selectionList: Array<string> = ['HR', 'Admin', 'IT'];
  buttons: Array<string> = ['View Emplyee', 'Add Employee'];

  // newEmployee: Employee = {
  //   name: '',
  //   age: null
  // };
  // employees: Array<Employee> = [
  //   {
  //     name: 'Vineeth',
  //     age: 34
  //   },
  //   {
  //     name: 'Vipin',
  //     age: 32
  //   }
  // ];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    const empObservable = this.service.getEmployees();

    empObservable.subscribe((res: Array<Employee>) => {

    });
  }

  swapMe() {
    this.name = 'Thalappala';
  }

  clearSelections() {
    this.employees.forEach(emp => emp.selected = false);
  }

  showDetails(employee: Employee) {
    this.clearSelections();
    employee.selected = true;
    this.selectedEmployee = employee;
  }

  onButtonClick() {
    this.myInputVal = 'Hello';
  }

  // addEmployee() {
  //   this.employees.push(this.newEmployee);
  // }

  deleteEmp(emp) {
    this.employees.splice(emp, 1);
  }

  onMenuClick(item) {
    alert('Menu clicked : ' + item);
  }

  onSelectionClick(item) {
    alert('Selection clicked : ' + item);
  }

  selectView(buttonIndex) {
    this.activeViewIndex = buttonIndex;
  }

}
