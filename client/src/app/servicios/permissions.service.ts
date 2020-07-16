import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  token: null

  constructor() { }

  decode(token){
    const decode = jwt_decode(token)
    if(decode){
      this.token = token
      return true
    }
    return false
  }

  tokenKey(){
    return this.token;
  }

  deleteTokenKey(){
    return this.token = null;
  }
}
