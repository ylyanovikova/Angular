import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPost } from 'src/app/models/IPost';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.["data"];

      if (state) {
        this.post = state;
      } else {
        this.postService.getById(id).subscribe(value => this.post = value)
      }
    })
  }

}
