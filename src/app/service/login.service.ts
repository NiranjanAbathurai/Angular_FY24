import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { sourceLogin } from '../source';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost:3000/";
  private loggedInUser = false;
  loggedInSubject : Subject<boolean> = new Subject<boolean>;

  constructor(private http:HttpClient) { 
    this.loggedInUser = false;
    this.loggedInSubject.subscribe((data)=>{
      this.loggedInUser = data;
    })
  }

  getLogInDetails(){
    return this.loggedInUser;
  }
  
  loggedOut(){
    this.loggedInUser = false;
    return of(this.loggedInUser);
  }

  getUsers(): Observable<sourceLogin[]>{
    // Without server method
    // return this.http.get<sourceLogin>('./assets/user.json').pipe(
    //   catchError(this.handleError)); 
    return this.http.get<sourceLogin[]>(this.baseURL + 'users')
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return throwError(()=>err.error() || 'Server error');
}

  addUser(body1:sourceLogin): Observable<sourceLogin[]>{

    const headers = { 'content-type': 'application/json'} ;
    const body=JSON.stringify(body1);
    return this.http.post<sourceLogin[]>(this.baseURL + 'users', body,{'headers':headers});
}
}
