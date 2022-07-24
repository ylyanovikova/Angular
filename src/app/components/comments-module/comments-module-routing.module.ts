import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path: '', component: CommentsComponent, children: [
      { path: ":id", component: CommentDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsModuleRoutingModule { }
