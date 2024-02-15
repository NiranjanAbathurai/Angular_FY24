import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Angular_app";

  constructor(private router: Router, private cookieService: CookieService, private loginService:LoginService){
    var date = new Date();
    var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    this.todayDay = days[date.getDay()];
    console.log(days[date.getDay()]);
    this.todayDate = date.toDateString();
    this.todayDate = this.todayDate.slice(4)
    console.log(this.todayDate)
  }

  ngOnInit(){
    var temp = this.cookieService.get('name');
    console.log(temp);
    console.log(localStorage.getItem('NAME'));
    console.log(sessionStorage.getItem('Name'));
    if(sessionStorage.getItem('Name') != null && sessionStorage.getItem('Name') != '' || 
       localStorage.getItem('NAME') != null && localStorage.getItem('NAME') != '' ){
      this.loginService.loggedInSubject.next(true);
      setTimeout(() =>{
        console.log('test');
        this.loginService.loggedInSubject.next(true);
      },10);
      this.router.navigateByUrl('about');
    }
  }

  todayDay = "";
  todayDate = "";
  

}
