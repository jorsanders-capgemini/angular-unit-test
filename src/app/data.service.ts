import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ROOT_URL = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(){
      this.http.get(`${this.ROOT_URL}/posts`);
  }
}
