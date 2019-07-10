import { Injectable } from '@angular/core';
import { Userdetails } from '../userdetails';
import { userList } from '../mock-userdetails';

@Injectable({
  providedIn: 'root'
})
export class ShowListService {

  constructor() { }
  getUserList():Userdetails[]{
    return userList;
  }
}
