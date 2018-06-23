import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users:Object;

  constructor(private userService: UserService) { }

  ngOnInit() {
	  this.getUsers();
  }

  getUsers(): void {

    this.userService.getUsers().subscribe(
      data => {

        this.users = data;
        console.log(this.users);

      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );


  }

}
