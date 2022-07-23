import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsModuleRoutingModule } from './comments-module-routing.module';
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from 'src/app/services/comments.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent
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
