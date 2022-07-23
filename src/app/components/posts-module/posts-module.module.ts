import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsModuleRoutingModule } from './posts-module-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/app/services/posts.service';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsModuleRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostsService
  ]
})
export class PostsModuleModule { }
