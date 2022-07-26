import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee:Employee =new Employee(0,'',0,'','','');

  message:string='';

  constructor(private service:EmployeeService, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.fetchIneEmployee(id).subscribe(
      data=>{
         this.employee = data;
      },error=>{
         console.log(error);
      }
    );
  }
  updateEmployee(){

  }


}
