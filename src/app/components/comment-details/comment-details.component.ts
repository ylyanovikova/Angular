import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICommentDetails } from 'src/app/models';
import { CommentsService } from 'src/app/services';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentsService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as ICommentDetails;

      if (state) {
        this.commentDetails = state;
      } else {
        this.commentService.getById(id).subscribe(value => this.commentDetails = value as ICommentDetails)
      }
    });
  }
}
