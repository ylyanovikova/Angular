import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<IUser> {

  constructor(private usersService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
    let {id} = route.params;
    return this.usersService.getById(id)
  }

}
