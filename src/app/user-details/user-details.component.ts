import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  Welcome = "User Details";
  public user :User = new User("Rishita", "rishitaadabala@gmail.com","Adabala1", "05/10/1998");
  constructor() { }

  ngOnInit(): void {
  }

}
