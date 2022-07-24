import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "users", loadChildren: () => import("./components/users-module/users-module.module").then(m => m.UsersModuleModule) },
  { path: "posts", loadChildren: () => import("./components/posts-module/posts-module.module").then(m => m.PostsModuleModule) },
  { path: "comments", loadChildren: () => import("./components/comments-module/comments-module.module").then(m => m.CommentsModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
