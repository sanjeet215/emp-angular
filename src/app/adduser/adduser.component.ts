import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/adminuser';
import { AdminmanagerService } from '../_services/adminmanager.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  User: User = new User();
  submitted = false;

  constructor(private adminManagerService : AdminmanagerService,
              private router: Router) { }

  ngOnInit() {
  }
 
  newOrganization(): void {
    this.submitted = false;
    this.User = new User();
  }

  save() {
    this.adminManagerService.addNewUser(this.User)
      .subscribe(data => console.log(data), error => console.log(error));
    this.User = new User();
    this.gotoList();
  }

  onSubmit() {
    console.log('Form Submitted , method called.');
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/viewuser']);
  }

}
