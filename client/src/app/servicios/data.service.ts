import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { SecurityWebService } from './security-web.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private securityWeb: SecurityWebService) { }

  getAll(endPoint){
    return this.http.get(environment.url + endPoint, this.securityWeb.getHeaders())
  }

  getById(id: string, endPoint: string){
    this.http.get(environment.url + endPoint + `?id=${id}`, this.securityWeb.getHeaders())
      .subscribe(response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  postData(endPoint: string, data){
    return this.http.post(environment.url + endPoint, data, this.securityWeb.getHeaders())
  }

  postDataMany(endPoint: string, data){
    return this.http.post(environment.url + endPoint, data, this.securityWeb.getHeaders())
  }

  updateData(endPoint: string, data){
    return this.http.put(environment.url + endPoint, data, this.securityWeb.getHeaders())
  }

  daleteData(endPoint: string, data){
    return this.http.delete(endPoint, this.securityWeb.getHeaders())
  }
}
