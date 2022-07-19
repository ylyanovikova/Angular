import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserDetails } from 'src/app/models';
import { UsersService } from 'src/app/services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.userService.getById(id).subscribe(value => this.userDetails = value)
    })
  }

}
