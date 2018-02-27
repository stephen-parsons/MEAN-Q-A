import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) { }

  login(User){
  	return this._http.post("user/login", User);
  }

  logout(){
  	return this._http.get("user/logout");
  }

  getUser(){
  	return this._http.get("user/get");
  }

}
