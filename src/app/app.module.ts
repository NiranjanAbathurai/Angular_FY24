import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {CookieService} from 'ngx-cookie-service'
import {AgGridModule} from 'ag-grid-angular'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestDirectiveDirective } from './common/test-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TestPipePipe } from './common/test-pipe.pipe';
import { TestimpurePipePipe } from './common/testimpure-pipe.pipe';
import { GridComponent } from './first/grid/grid.component';
import { LazyLoadModule } from 'src/lazy-load/lazy-load.module';
import { HeaderComponent } from './header/header.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { HttpInterceptorInterceptor } from './service/http-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FirstComponent,
    SecondComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    TestDirectiveDirective,
    TestPipePipe,
    TestimpurePipePipe,
    GridComponent,
    TestHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    LazyLoadModule
  ],
  providers: [
    DatePipe,
    CookieService,
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
