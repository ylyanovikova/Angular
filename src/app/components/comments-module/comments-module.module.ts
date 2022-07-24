import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommentsModuleRoutingModule } from './comments-module-routing.module';
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from 'src/app/services/comments.service';
import { CommentDetailsComponent } from './comment-details/comment-details.component';


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsModuleRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsService
  ]
})
export class CommentsModuleModule { }
