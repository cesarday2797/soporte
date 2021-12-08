import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public url = 'http://localhost/APIX/333/api';
  constructor(public http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost/APIX/333/api/register`, user);
  }

}