import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnlockaccService {

  constructor(private unlock:HttpClient) { }

  postser(body:any)
  {
    return this.unlock.post(`http://15.206.171.20:9090/unlock`,body,{responseType:'text'})
  }
  
}
