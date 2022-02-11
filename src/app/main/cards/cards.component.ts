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
searchTerm: string="";
   constructor(private _userService: UserService, private searchService: SearchService) {
   }
  ngOnInit(): void {
    this.getData(); 
  this.searchService.getSearchObservable().
  subscribe(searchInput=> {
    if(searchInput.length>=3){
      this.searchTerm= searchInput;
    }
    else{
      this.searchTerm=""
    }
    
    this.search();   
  });
}
  private getData() {
    this._userService.getUsersData().subscribe(res => {
      this.users = res.data;
    });
  }

search(){
  if(this.searchTerm==""){
    this.getData();
  }else{
    this.users = this.users.filter(res=>{
      return res.first_name?.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());
    })
  }
}
}
