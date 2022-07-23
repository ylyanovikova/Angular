import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/users-module/user/user.component';
import { UsersComponent } from './components/users-module/users/users.component';
import { PostComponent } from './components/posts-module/post/post.component';
import { PostsComponent } from './components/posts-module/posts/posts.component';
import { CommentComponent } from './components/comments-module/comment/comment.component';
import { CommentsComponent } from './components/comments-module/comments/comments.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    PostComponent,
    PostsComponent,
    CommentComponent,
    CommentsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
