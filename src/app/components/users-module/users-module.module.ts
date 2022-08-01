import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { UsersModuleRoutingModule } from './users-module-routing.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UsersService } from 'src/app/services/users.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserResolverService } from 'src/app/services/user-resolver.service';
import { UsersResolver } from 'src/app/services/users.resolver';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    UserResolverService,
    UsersResolver
  ]
})
export class UsersModuleModule { }
