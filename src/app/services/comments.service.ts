import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../consants/urls';
import { IComment } from '../models/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments)
  };
  getById(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(`${urls.comments}/${id}`)
  }
}
