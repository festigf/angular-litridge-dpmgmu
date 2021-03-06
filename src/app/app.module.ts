import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

//import { MainNavComponent } from './main-nav/main-nav.component';
import { AppComponent } from './app.component';
//import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments/departments.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,DepartmentsComponent,
  //  MainNavComponent,
  //  LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    MainNavComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }