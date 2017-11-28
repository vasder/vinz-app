import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
