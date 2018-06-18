import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {debug} from 'util';

@Injectable()
export class UserService {
  constructor(private httpService: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/users';

  arrData: string[];
  arrUsers: User[];

  getUsers(): User[] {

     this.httpService.get(this.configUrl).subscribe(
      data => {
        this.arrData = data as string [];	 // FILL THE ARRAY WITH DATA.

        this.arrData.forEach(function (line) {

          }
        );

        return this.arrUsers;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

     return null;

  }

}
