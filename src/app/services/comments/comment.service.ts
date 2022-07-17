import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/models/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this.http
      .get<IComment[]>("https://jsonplaceholder.typicode.com/comments")
  }
}
