import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/IComment';
import { CommentService } from 'src/app/services/comments/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(value => this.comments = value)
  }

}
