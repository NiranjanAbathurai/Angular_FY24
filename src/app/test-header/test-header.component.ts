import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-test-header',
  templateUrl: './test-header.component.html',
  styleUrls: ['./test-header.component.scss']
})
export class TestHeaderComponent {
  title = 'Niranjan Abathurai';
  index !: any;
  loggedInDetails = false;
  navbar_heading = ['Angular','test','about','login'];

  constructor(private loginService:LoginService, private cookieService:CookieService){}
  
  ngOnInit(){
    
    this.loginService.loggedInSubject.subscribe(data=>{
      this.loggedInDetails = data;
    });
    console.log(this.loggedInDetails);
 
  }

  navActiveBarClick(index:any){
    // this.router.navigate(['about']);
    if(index === "Logout"){
      this.cookieService.deleteAll();
      sessionStorage.removeItem('Name');
      sessionStorage.removeItem('username');
      localStorage.removeItem('NAME');
      localStorage.removeItem('username');
      this.loginService.loggedInSubject.next(false);
    }
    console.log(index);
  }

}
