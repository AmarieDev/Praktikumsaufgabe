import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
searchObservable: Observable<any>;
  constructor() { }
  setSearchObservable(observable: Observable<any>){
    this.searchObservable= observable;
  }
 
  getSearchObservable(): Observable<any>{
      return this.searchObservable;
  }
}
