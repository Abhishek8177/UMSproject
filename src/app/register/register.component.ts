import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  Registration = new FormGroup({
 
    cityId: new FormControl(),
    countryId :new FormControl() ,
    dob : new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    email :new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    fname : new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}
    ),
    gender : new FormControl(),
    lname : new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    phno : new FormControl(   
         '',{validators:Validators.required,updateOn:'blur'}
    ),
    stateId : new FormControl()
    })

    newCountry:any
    newState:any
    newCity:any

    constructor(private registerser:RegistrationService){

      this.countrydata()
      // this.statedata(1)
      // this.citydata(1)

    }


    savedata()
    {
      this.registerser.saveregister(this.Registration.value).subscribe((res)=>alert( res))
    }

    countrydata()
    {
      this.registerser.getallcountries().subscribe((res)=>console.log(this.newCountry = res))
    }

    statedata(countryId:number)
    {
      this.registerser.getstate(countryId).subscribe((res)=>console.log(this.newState= res))
    }

    citydata(stateId:any)
    {
      this.registerser.getcity(stateId).subscribe((res)=>console.log(this.newCity= res))
    }

    emaildata(email:any)
    {
       this.registerser.getemail(email).subscribe((res)=>console.log(res))
    }
    


  
    }
    

