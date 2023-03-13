import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetpassService } from 'src/app/services/forgetpass.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  forgetform=new FormGroup({
    emailId:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}
    )
  })



  constructor(private forget:ForgetpassService){}

  emailany:any

                                             

  forgetpass(emailId:number)
  {
    this.forget.forgetemail(emailId).subscribe((res)=>alert(res))
  }

}
