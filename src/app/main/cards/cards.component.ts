import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';
import { UserInfo, UserService } from './user.service';
import {filter} from 'rxjs/operators';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [UserService]
})
export class CardsComponent implements OnInit {
users:UserInfo[]=[]
   constructor(private _userService: UserService, private searchService: SearchService) {
   }
  ngOnInit(): void {
    this._userService.getUsersData().subscribe(res => {
      this.users = res.data;      
  });
  this.searchService.getSearchObservable().pipe(filter(text => text.length >=3)).subscribe(value=> console.log(value));
}
}
