import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import{FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm= new FormGroup({

    email:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}
    ),
    pwd:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    )

  })

  constructor( private abhilogin:LoginService){}
 
  postlog()
  {
    this.abhilogin.postdata(this.loginForm.value).subscribe((res)=>alert(res))
  }
}
