import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgetComponent } from './login/forget/forget.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'unlock-account',component:UnlockAccountComponent},
  {path:'unlockAcc',component:UnlockAccountComponent},

  {path:'forget-pass',component:ForgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
