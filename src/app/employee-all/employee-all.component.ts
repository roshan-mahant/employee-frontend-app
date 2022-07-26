import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css']
})
export class EmployeeAllComponent implements OnInit {

  employees : Employee[] = [];

  message : string = '';

  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
      this.fetchAllEmployees();
  }

  fetchAllEmployees(){
    this.service.fetchAllEmployees().subscribe(
      data=>{
         this.employees= data;
      },error=>{
         console.log(error);
      }      
    );
  }

  deleteEmployee(id:number){
    this.service.removeOneEmployee(id).subscribe(
      (data)=>{
          this.message=data;
          this.fetchAllEmployees();
      },(error)=>{
          console.log(error);
      }
    );
  }
  editEmployee(id:number){
    this.router.navigate(['edit',id]);
  }
}
