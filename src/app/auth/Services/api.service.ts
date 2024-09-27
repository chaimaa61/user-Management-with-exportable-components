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

}

