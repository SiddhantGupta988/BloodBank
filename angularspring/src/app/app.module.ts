import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component' ;
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RecruiterManagingDonorComponent } from './recruiter-managing-donor/recruiter-managing-donor.component';
import {MatSelectModule} from '@angular/material/select';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RecruiterManagingDonorComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
                          {path:'sendData',component:UserComponent},
                          {path:'donorList',component:RecruiterManagingDonorComponent}]),
    HttpClientModule,
    MatInputModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatRadioModule,MatTableModule,
    BrowserAnimationsModule,MatSelectModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[ MatInputModule ,
    MatFormFieldModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
