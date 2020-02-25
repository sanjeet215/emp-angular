import { Component, OnInit } from '@angular/core';
import { User } from '../_model/adminuser';
import { Router } from '@angular/router';
import { AdminmanagerService } from '../_services/adminmanager.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})
export class ViewuserComponent implements OnInit {

  constructor(private dataService: AdminmanagerService,
              private router: Router) { }

  users: User[];  
  dataSource = this.users;            

  ngOnInit() {
    this.getAllAppUsers();
  }

  getAllAppUsers() {
    this.dataService.getAllUsers().subscribe(
        (userlist: User[]) => {
            this.users = userlist;
            console.log(this.users);
            this.dataSource = this.users;
        },
        (error: any) => console.log(error), // (2) second argument
        () => console.log('all data gets finished') // (3) Third argument
    );
  }
}
