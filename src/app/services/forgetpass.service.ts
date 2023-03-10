import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  constructor(private abhi:HttpClient) { }

  forgetemail(id:number)
  {
    return this.abhi.get(`http://15.206.171.20:9090/forgotPwd/${id}`,{responseType:'text'})
  }
}
