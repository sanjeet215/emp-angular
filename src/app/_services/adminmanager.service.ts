import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_model/adminuser';

@Injectable({
  providedIn: 'root'
})
export class AdminmanagerService {

  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + '/api/auth/user');
  }

  deleteUser(userid): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/api/user/' + userid);
  }

  addNewUser(User): Observable<User> {
    console.log('Form Data --> '+ User.email+User.password+User.username)
    return this.httpClient.post<User>(this.baseUrl + '/api/auth/signup', User);
  }

}
