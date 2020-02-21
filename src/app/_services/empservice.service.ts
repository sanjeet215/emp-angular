import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../_model/employee';
import { TokenStorageService } from '../_services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  baseUrl = 'http://localhost:8080';
  

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl + '/api/mod/getallemp');
  }

  deleteEmployee(empid): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/api/employee/' + empid);
}

  addNewEmployee(employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl + '/api/emp', employee);
  }
}
