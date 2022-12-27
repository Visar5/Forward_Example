import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { Devices } from './core/models/devices';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _host: string;
  constructor(private http: HttpClient) {
    this._host = 'http://localhost:3000/users';
   }


createUser(user){
  return this.http.post(this._host, user);
}
getAllUser(){
  return this.http.get(this._host);
}
updateUser(user){
  return this.http.put(this._host + '/' + user.id, user);
}

deleteUser(id:number){
  return this.http.delete<Devices>(this._host + '/' + id);
}



getProfUser(id : number) {
  return this.http
  .get(this._host + '/' + id);
}
}
