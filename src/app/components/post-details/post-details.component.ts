import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPostDetails } from 'src/app/models';
import { PostsService } from 'src/app/services';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this?.router?.getCurrentNavigation()?.extras.state as IPostDetails;

      if(state){
        this.postDetails = state;
      }else{
        this.postService.getById(id).subscribe(value => this.postDetails = value as IPostDetails)
      }
    });
  }

  ngOnInit(): void {

  }

}
