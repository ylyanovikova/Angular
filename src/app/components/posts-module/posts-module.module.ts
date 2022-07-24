import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostsModuleRoutingModule } from './posts-module-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostsService } from 'src/app/services/posts.service';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsModuleRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ]
})
export class PostsModuleModule { }
