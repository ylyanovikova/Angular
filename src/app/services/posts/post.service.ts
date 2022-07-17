import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
