import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { urls } from 'src/app/constants';
import { IComment } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(urls.comments)
  }
  getById(id: string): Observable<IComment> {
    return this.http.get<IComment>(urls.comments + "/" + id)
  }
}
