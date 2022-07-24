import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IComment } from 'src/app/models/IComment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment;

  constructor(private commentsService: CommentsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'];

      if (state) {
        this.comment = state;
      } else {
        this.commentsService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

}
