import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnlockaccService } from '../services/unlockacc.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {

  constructor( private unlock:UnlockaccService){}


  unlockAccForm=new FormGroup({

    email:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}
    ),
    tempPwd: new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    newPwd: new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    ),
    confirmPwd:new FormControl(
      '',{validators:Validators.required,updateOn:'blur'}

    )

  })


  postdata()
  {
    this.unlock.postser(this.unlockAccForm.value).subscribe((res)=>console.log(res))
  }

}
