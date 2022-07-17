import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => this.users = response)
  }

}
