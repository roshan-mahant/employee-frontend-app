import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  employee : Employee = new Employee(0, '', 0, '', '', '');

  message : string ='';

  constructor(private service:EmployeeService) { }
  //constructor() { }

  ngOnInit(): void {


  }

  createEmployee(){
    console.log(this.employee);
    this.service.createEmployee(this.employee)
    .subscribe(data=>{
      this.message=data;
      this.employee  = new Employee(0, '', 0, '', '', '');
    },error=>{
       console.log(error);
       this.message='unable to save! Contact Admin';
    });
  }

}
