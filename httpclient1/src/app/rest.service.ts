import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import {map} from "rxjs/operators"
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class RestService {
public dt(rs:Response){
return rs;
}
  constructor(public ht:HttpClient) { }
  getrestservice():Observable<any>{
    return(this.ht.get("getdata"))
  }
  insrestservice(dt):Observable<any>{
    return(this.ht.post("postdata",dt))
  }
  updaterestservice(argg):Observable<any>{
    return(this.ht.post("updatedata",argg).pipe(map(this.dt)))
  }
}
