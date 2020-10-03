import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',component:AuthComponent,
    children: [
      {
        path: '', component:LoginComponent
      },
      {
        path: 'signup', component:RegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
