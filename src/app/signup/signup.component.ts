import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import {FormBuilder, FormArray, Validators, AbstractControl, ValidationErrors} from '@angular/forms'

import {sourceLogin} from '../source'
import { LoginService} from '../service/login.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private formBuilder:FormBuilder,private loginService:LoginService){}

  // signUpDetails = new FormGroup({
  //   userName : new FormControl(''),
  //   emailId: new FormControl(''),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   acceptTerms: new FormControl(false)
  // });
  //setValue({}) for changing value
  //patchValue({}) ffor modifying value

  newUserDetails = new sourceLogin(0,"","","");
  userList : sourceLogin[] = [];
  signUpDetails = this.formBuilder.group({
    userName :['', [Validators.required, Validators.minLength(8),Validators.maxLength(12)]],
    emailId : ['', [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9]+\\.[a-z]{2,4}$")]],
                                                    
    password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12),CapitalLetterValidator,SmallLetterValidator,NumericCharValidator,SymbolCharValidator]],
    confirmPassword: ['', [Validators.required]],
    acceptTerms : [false, Validators.required],
  });

  ngOnInit(){
    this.loginService.getUsers().subscribe({
      next: users =>{
        this.userList = users;
        console.log(this.userList)}
    })
  }

  get signUpForm() {
    return this.signUpDetails.controls;
  }

  
  onBlur(){
    console.log(this.signUpDetails.value.confirmPassword);
  }

  onKeyUp($event:any){
    console.log($event);
  }


  onSubmitForm(){
    if(this.signUpDetails.value.userName != null && this.signUpDetails.value.emailId && this.signUpDetails.value.password){
      this.newUserDetails.userName = this.signUpDetails.value.userName;
      this.newUserDetails.emailId = this.signUpDetails.value.emailId;
      this.newUserDetails.password = this.signUpDetails.value.password;
    }
    var tempNewUser = this.newUserDetails;
    //this.newUserDetails.password = this.signUpDetails.value.password ?? ''; // Nullish coalescing operator (??)
    console.log(this.newUserDetails);
    var temp = false;
    this.userList.forEach(function (value) {
      if((value.userName === tempNewUser.userName || value.emailId === tempNewUser.emailId )){
        console.log(value.emailId);
        temp = true;
      } 
    });
    if (!temp){
      this.loginService.addUser(this.newUserDetails).subscribe({
        next : users =>{
          console.log(users);
        }
      });
      this.signUpDetails.reset();
    } else{
      alert('Username or email present');
      this.signUpDetails.get('password')?.setValue('');
      this.signUpDetails.get('confirmPassword')?.setValue('');
    }
  }


}

export const CapitalLetterValidator = function (control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';
  let upperCaseCharacters = /[A-Z]+/g;

  if (!value) {
    return null
  }
  
  if (upperCaseCharacters.test(value) === false) {
    return { capitalLetter:true};
  }

  return null;
}

export const SmallLetterValidator = function(control:AbstractControl): ValidationErrors | null{
  let value: string = control.value || '';
  let lowerCaseCharacters = /[a-z]+/g;

  if(!value){
    return null;
  }
  if (lowerCaseCharacters.test(value) === false) {
    return { smallLetter: true };
  }
  return null;
}

export const PasswordStrengthValidator1 = function(control:AbstractControl): ValidationErrors | null{
  let value: string = control.value || '';
  let lowerCaseCharacters = /[a-z]+/;

  if(!value){
    return null;
  }
  if (lowerCaseCharacters.test(value) === false) {
    return { smallLetter: true };
  }
  return null;
}

export const NumericCharValidator = function(control:AbstractControl): ValidationErrors | null{
  let value: string = control.value || '';
  let numberCharacters = /[0-9]+/;

  if(!value){
    return null;
  }
  if (numberCharacters.test(value) === false) {
    return { numberChar:true };
  } 
  return null;
}

export const SymbolCharValidator = function(control:AbstractControl): ValidationErrors | null{
  let value: string = control.value || '';
  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if(!value){
    return null;
  }
   if (specialCharacters.test(value) === false) {
    return { symbolChar: true };
  }
  return null;
}

