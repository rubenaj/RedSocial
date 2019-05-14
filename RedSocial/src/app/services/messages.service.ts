import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  list:any[];

  constructor(public http:HttpClient) { }

  get() {
    this.http.get("http://localhost:8080/message/").subscribe((data:any) => {
      this.list = data;
      console.log(this.list);
    });
  }

  add(message:any){
    this.http.post("http://localhost:8080/message/", message).subscribe((data:any) => {
      this.get();
    });
  }
}
