import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    { path: '', loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule) },
//   { path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },
//   { path: 'contact', loadChildren: () => import(`./contact/contact.module`).then(m => m.ContactModule) },
//   { path: 'single', loadChildren: () => import(`./single/single.module`).then(m => m.SingleModule) },
//   { path: 'blog', loadChildren: () => import(`./blog/blog.module`).then(m => m.BlogModule) },
//   { path: 'signup', loadChildren: () => import(`./registration/registration.module`).then(m => m.RegistrationModule) },
//   { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
//   { path: 'addblog', loadChildren: () => import(`./addblog/addblog.module`).then(m => m.AddblogModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
