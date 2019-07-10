import { Component, OnInit } from '@angular/core';
import { Userdetails } from '../userdetails';
import { userList } from '../mock-userdetails';
import { ShowListService } from '../displayuser/show-list.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
   name: String;
   email: String;
  public userList:Userdetails[];
  constructor(private showListService:ShowListService) {}

  ngOnInit() {
   this.showUserList();
   this.name='';
   this.email='';

  }
  showUserList():void {
    this.userList=this.showListService.getUserList();
      }
  addNewUser(){
       this.userList.push({name : this.name,email : this.email});
   
  }
 
}
