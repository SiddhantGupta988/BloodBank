import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recruiter-managing-donor',
  templateUrl: './recruiter-managing-donor.component.html',
  styleUrls: ['./recruiter-managing-donor.component.css']
})
export class RecruiterManagingDonorComponent implements OnInit {
	dataSource:any;xyz;a:any;
	displayedColumns: string[] = ['b','donorName'];
	
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  
  this.http.get("http://localhost:8082/donor/getDonorDetails")
  .subscribe((response)=>{
  		this.a = response;
  		this.dataSource = new MatTableDataSource(this.a);
  });

}
}
