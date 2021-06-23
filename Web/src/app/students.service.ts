import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './Model/user';
import { ApiResponse } from './Model/api-response';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { } 

  baseUrl = 'http://localhost/crudphpangular/';

  login(loginData: { username: any; password: any; }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/login.php', loginData);
  }


  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/list.php');
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/getById.php?id=' + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/insert.php', user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/delete.php?id=' + id);
  }

  updateUser(user: User){
    return this.http.post<ApiResponse>(this.baseUrl + '/update.php', user);
  }
}
