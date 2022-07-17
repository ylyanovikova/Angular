import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/constants';
import { IComment } from 'src/app/models/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this.http
      .get<IComment[]>(urls.comments)
  }
}
