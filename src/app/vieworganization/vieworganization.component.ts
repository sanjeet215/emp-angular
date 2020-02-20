import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../_services/organization.service';
import { Organization } from '../_model/organization';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vieworganization',
  templateUrl: './vieworganization.component.html',
  styleUrls: ['./vieworganization.component.scss']
})
export class VieworganizationComponent implements OnInit {

  constructor(private dataService: OrganizationService,
              private router: Router) { }

  organizations: Organization[];  
  dataSource = this.organizations;

  ngOnInit() {
    this.getAllOrganization();
  }


  getAllOrganization() {
    this.dataService.getAllOrganizations().subscribe(
        (eorganizationlist: Organization[]) => {
            this.organizations = eorganizationlist;
            console.log(this.organizations);
            this.dataSource = this.organizations;
        },
        (error: any) => console.log(error), // (2) second argument
        () => console.log('all data gets finished') // (3) second argument
    );
  }
}
