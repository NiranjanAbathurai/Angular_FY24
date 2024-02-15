import { Component } from '@angular/core';
import { sourceLogin} from '../source'
import { LoginService} from '../service/login.service'
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'
import {Form, NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private loginService:LoginService, private router:Router, private cookieService:CookieService){ }

  userList : sourceLogin[] = [];
  userPresent = true;
  loggedIn  = false;
  ngOnInit(){
    this.loginService.getUsers().subscribe({
      next: users =>{
        this.userList = users;
        console.log(this.userList)}
    });
  }
  loginform !: NgForm;
  loginFormDetails = new sourceLogin(0,"","","");

  onSubmit(loginform:Form){
    console.log(this.loginFormDetails);
    var userName = this.loginFormDetails.userName;
    var password = this.loginFormDetails.password;
    var temp = false;
    console.log(loginform);
    this.userList.forEach(function (value) {
      if((value.userName == userName || value.emailId == userName ) && value.password == password){
        console.log(value.emailId);
        temp = true;
      } 
    });
    if(temp){
      this.loginService.loggedInSubject.next(true);
      this.router.navigate(['about']);
      this.cookieService.set('name',this.loginFormDetails.userName);
      localStorage.setItem('NAME',this.loginFormDetails.userName);
      sessionStorage.setItem('Name',this.loginFormDetails.userName);
      this.cookieService.set('username',this.loginFormDetails.userName);
      localStorage.setItem('username',this.loginFormDetails.userName);
      sessionStorage.setItem('username',this.loginFormDetails.userName);
    }

    this.loggedIn = temp;
    this.userPresent = temp;
    this.loginFormDetails.password = ""
  }


}
