import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

interface gend {
  value: string;
  viewValue: string;
}

interface bloodtype
{
  value: string;
  viewValue: string;
}
interface bloodbank
{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
y:any;
  constructor(public http:HttpClient) {}
	ngOnInit(): void { }
  registrationForm = new FormGroup({
  		donorName:new FormControl(''),
      g:        new FormControl(''),
  		age:		  new FormControl(''),
  		mobileNo:	new FormControl(''),
  		address:  new FormControl(''),
      grp:      new FormControl(''),
	   	email:		new FormControl(''),
      b:        new FormControl(''),
  		password:	new FormControl('')
  		
  });
   gender: gend[] = [
    {value: 'b1', viewValue: "Male"},
    {value: 'b2', viewValue: 'Female'},
    {value: 'b3', viewValue: 'Other'}
  ];
  bloodBank:bloodbank[]=[{value:'v1',viewValue:'India Red Cross Society'},
                          {value:'v2',viewValue:'Khoon Organization '},
                          {value:'v3',viewValue:'Safe Life India'},
                          {value:'v4',viewValue:'Lions Blood Bank'},
                          {value:'v5',viewValue:'Sankalp India Foundation'}];

  bloodGrp:bloodtype[]=[{value:'a1',viewValue:'A+'},
                {value:'a2',viewValue:'A-'},
                {value:'a3',viewValue:'B+'},
                {value:'a4',viewValue:'B-'},
                {value:'a5',viewValue:'O+'},
                {value:'a6',viewValue:'O-'},
                {value:'a7',viewValue:'AB+'},
                {value:'a8',viewValue:'AB-'}];
  callingFunction(){
  		let x = this.registrationForm.value;
 	    console.log(x);
 	this.http.post('http://localhost:8082/donor/sendDetails',x).subscribe(res=>{
  		this.y= res;
  		console.log(this.y);
  	});
  }
  
}
