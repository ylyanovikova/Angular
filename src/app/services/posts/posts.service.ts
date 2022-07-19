import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { urls } from 'src/app/constants';
import { IPost } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts)
  }
  getById(id: string): Observable<IPost> {
    return this.http.get<IPost>(urls.posts + "/" + id)
  }
}
