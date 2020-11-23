import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetDistanceService {

  rootURL = '/api';

  constructor(private http: HttpClient) { }
  getDistance(source:string,destination:string){
     return this.http.get(this.rootURL+'/distance?source='+source+'&destination='+destination)
  }
}
