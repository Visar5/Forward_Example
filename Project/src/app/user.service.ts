import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _host: string;
  constructor(private http: HttpClient) {
    this._host = 'http://localhost:8000/users';
   }


createUser(user){
  return this.http.post("http://localhost:8000/users", user);
}
getAllUser(){
  return this.http.get("http://localhost:8000/users");
}
updateUser(user){
  return this.http.put("http://localhost:8000/users/" + user.id, user);
}

deleteUser(user){
  return this.http.delete("http://localhost:8000/users/" + user.id);
}



getProfUser(id : number) {
  return this.http
  .get(this._host)
  .pipe(
   map((res: any) => {
   return res.find(e => e.id === id);
    })
  );
}
}
