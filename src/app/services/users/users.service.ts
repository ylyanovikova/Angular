import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { urls } from 'src/app/constants';
import { IUser } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(urls.users)
  }
  getById(id: string): Observable<IUser> {
    return this.http
      .get<IUser>(urls.users + "/" + id)
  }
}
