import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { PermissionsService } from './permissions.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityWebService {

  constructor(private permission: PermissionsService) { }

  getHeaders(){
    const optionsHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.permission.tokenKey()
      })
    };
    return optionsHeaders
  }

  getFilesHeaders(){
    const optionsHeaders = {
      headers: new HttpHeaders({
        Authorization: this.permission.tokenKey()
      })
    };
    return optionsHeaders
  }
}
