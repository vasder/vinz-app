import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

import { Employee } from './models/employee';

@Injectable()
export class EmployeeService {
    employeeListEvent: Subject<Employee[]> = new Subject<Employee[]>();
    constructor(private http: HttpClient) {

    }


    getEmployees() {
        return this.http
            .get('/assets/employees.json')
            .map((employees: Array<Employee>) => {
                employees.push({
                    name: 'Raja',
                    age: 22
                });
                this.employeeListEvent.next(employees);
                return employees;
            });
    }
}
