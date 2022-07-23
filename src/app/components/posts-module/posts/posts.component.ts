import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(value=> this.posts = value)
  }

}
