import { Component, OnInit } from '@angular/core';

import { IComment } from 'src/app/models';
import { CommentsService } from 'src/app/services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getAll().subscribe(value => this.comments = value)
  }

}
