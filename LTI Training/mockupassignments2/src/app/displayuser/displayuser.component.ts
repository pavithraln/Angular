import { Component, OnInit } from '@angular/core';
import { ShowListService } from './show-list.service';
import { Userdetails } from '../userdetails';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {
private userList:Userdetails[];
  constructor(private showListService:ShowListService) { }


  ngOnInit() {
    this.showUserList();
  }
  showUserList():void {
this.userList=this.showListService.getUserList();
  }

}
