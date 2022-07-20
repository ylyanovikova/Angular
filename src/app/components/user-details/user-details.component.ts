import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'];
      
      if (state) {
        this.userDetails = state;
      } else {
        this.userService.getById(id).subscribe(value => this.userDetails = value)
      }
    })
  }

}
