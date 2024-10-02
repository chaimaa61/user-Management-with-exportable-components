import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { LoginRequest } from 'src/app/interfaces/LoginRequest';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:9090/api/user'; // replace with your API URL

  constructor(private http: HttpClient) {}

  authenticate(loginRequest:LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginRequest);
  }
  getU(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiUrl}`);
  }
  getOneUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user?id=${id}`)
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}?id=${user.id}`; // Assumes the API follows RESTful principles 
    return this.http.put<User>(url, user); // Or use PATCH if you prefer
  }
  deleteUser(user :User){
    const url = `${this.apiUrl}?id=${user.id}`; // Assumes the API follows RESTful principles 
    return this.http.delete<User>(url); // Or use PATCH if you prefer
 
  }

}

