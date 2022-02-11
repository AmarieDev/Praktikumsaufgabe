import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private searchService: SearchService) {
    this.searchService.setSearchObservable(this.searchControl.valueChanges);
  }

  ngOnInit(): void {
  }

    searchControl = new FormControl('');
}
