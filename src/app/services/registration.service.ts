import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private register:HttpClient) { }

  saveregister(body:any)
  {
    return this.register.post(`http://15.206.171.20:9090/saveUser`,body,{responseType:'text'})
  }


//   getStates(countryId: number) {
//     return this.register.get(`http://15.206.171.20:9090/states/${countryId}`)
  
//   }

//   getCities(stateId: number) {
//     return this.register.get(`http://15.206.171.20:9090/cities/${stateId}`)
// }
    
  getallcountries()
  {
    return this.register.get(`http://15.206.171.20:9090/countries`)
  }

  getstate(countryId:number)
  {
    return this.register.get(`http://15.206.171.20:9090/states/${countryId}`)
  }

  getcity(stateId:number)
  {
    return this.register.get(`http://15.206.171.20:9090/cities/${stateId}`)
  }

  getemail(email:any)
  {
    return this.register.get(`http://15.206.171.20:9090/emailcheck/${email}`,{responseType:'text'})
  }

}