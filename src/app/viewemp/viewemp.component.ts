import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../_model/employee';
import { EmpserviceService } from '../_services/empservice.service';


@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.scss']
})
export class ViewempComponent implements OnInit {

  constructor(private dataService: EmpserviceService,
              private router: Router) { }


  employees: Employee[];

  displayedColumns: string[] = ['fullName' , 'mobile', 'department', 'city', 'state' , 'emailId', 'actions'];
  dataSource = this.employees;              
  
  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.dataService.getAllEmployees().subscribe(
        (employeelist: Employee[]) => {
            this.employees = employeelist;
            console.log(this.employees);
            this.dataSource = this.employees;
        },
        (error: any) => console.log(error), // (2) second argument
        () => console.log('all data gets finished') // (3) second argument
    );
}
}
