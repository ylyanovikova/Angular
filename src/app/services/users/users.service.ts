import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { urls } from 'src/app/constants';
import { IUser, IUserDetails } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(urls.users)
  }
  getById(id: string): Observable<IUserDetails> {
    return this.http
      .get<IUserDetails>(urls.users + "/" + id)
  }
}
