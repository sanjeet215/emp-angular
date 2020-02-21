import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../_services/organization.service';
import { Organization } from '../_model/organization';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addorganization',
  templateUrl: './addorganization.component.html',
  styleUrls: ['./addorganization.component.scss']
})
export class AddorganizationComponent implements OnInit {

  organization: Organization = new Organization();
  submitted = false;

  constructor(private organizationService : OrganizationService,
              private router: Router) { }

  ngOnInit() {
  }

  newOrganization(): void {
    this.submitted = false;
    this.organization = new Organization();
  }

  save() {
    this.organizationService.addNewOrganization(this.organization)
      .subscribe(data => console.log(data), error => console.log(error));
    this.organization = new Organization();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/vieworg']);
  }
}
