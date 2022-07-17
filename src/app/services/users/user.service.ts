import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { urls } from 'src/app/constants';
import { IUser } from '../../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<IUser[]>{
    return this.http
    .get<IUser[]>(urls.users)
  }
}
