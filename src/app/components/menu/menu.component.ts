import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()
  list: Array<string>;

  @Input()
  buttonList: Array<String>;

  @Output()
  onMenuClick: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onButtonItemClick: EventEmitter<number> = new EventEmitter<number>();

  selectedButtonIndex = 0;
  employeeCount = 0;

  onBtnClcikc(index) {
    this.onButtonItemClick.emit(index);
    this.selectedButtonIndex = index;
  }

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.employeeListEvent
      .subscribe(employee => {
        this.employeeCount = employee.length;
      });
  }

  menuItemClicked(e, menuItem) {
    e.preventDefault();
    this.onMenuClick.emit(menuItem);
  }

}
