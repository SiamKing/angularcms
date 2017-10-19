import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageService {

  constructor(private http: Http) { }

  public pagesBS = new BehaviorSubject<string>(null);
}
