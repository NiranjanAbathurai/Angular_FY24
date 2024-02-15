import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SecondComponent } from './second/second.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {path:"angular",pathMatch:'full',component:FirstComponent,canActivate:[AuthGuardService]},
  {path:"javascript",pathMatch:'full',component:SecondComponent,canActivate:[AuthGuardService]},
  {path:"about",pathMatch:'full',component:AboutComponent,canActivate:[AuthGuardService],
        children:[{path:'about/:id',pathMatch:'full',component:AboutComponent}]},
  {path:"login",pathMatch:'full',component:LoginComponent},
  {path:"lazyLoad",pathMatch:'full',loadChildren:()=>import('../lazy-load/lazy-load.module').then(m=>m.LazyLoadModule)},
  {path:'signup',pathMatch:'full',component:SignupComponent},
  {path:"**",redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
