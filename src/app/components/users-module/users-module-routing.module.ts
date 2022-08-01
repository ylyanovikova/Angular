import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserResolverService } from 'src/app/services/user-resolver.service';
import { UsersResolver } from 'src/app/services/users.resolver';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "", component: UsersComponent, children: [
      { path: ":id", component: UserDetailsComponent,
    resolve: {userData: UserResolverService}}
    ],
    resolve: {usersData: UsersResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersModuleRoutingModule { }
