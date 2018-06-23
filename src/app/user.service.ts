import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private httpService: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {

     return this.httpService.get(this.configUrl);

  }

}
