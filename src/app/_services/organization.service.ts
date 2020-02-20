import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization } from '../_model/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllOrganizations(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(this.baseUrl + '/api/org');
  }

  deleteOrganization(orgid): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/api/org/' + orgid);
  }

  addNewOrganization(organization): Observable<Organization> {
    return this.httpClient.post<Organization>(this.baseUrl + '/api/org/create', organization);
  }
}