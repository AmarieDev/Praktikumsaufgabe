import { Component, OnInit } from '@angular/core';
import { UserInfo, UserService } from './user.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [UserService]
})
export class CardsComponent implements OnInit {
users:UserInfo[]=[]
   constructor(private _userService: UserService) {
   }
  ngOnInit(): void {
    this._userService.getUsersData().subscribe(res => {
      this.users = res.data;
      console.log(res.data);
  })
}
}
