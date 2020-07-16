import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { PermissionsService } from './permissions.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = `${environment.url}login`

  constructor(private http:HttpClient, private router:Router, private permissions: PermissionsService) { }

  login = (data) => {
    this.http.post(this.url, data)
    .subscribe(data => {
      let token = data['token'];
      let decode = this.permissions.decode(token)
      if(decode){
        this.router.navigate(['/menu']);
      }
      else{
        return alert('Error con el token')
      }
    }),
    error => {
      console.log(error)
    }
  }
}
