import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-condition',
  templateUrl: './get-condition.component.html',
  styleUrls: ['./get-condition.component.scss']
})
export class GetConditionComponent implements OnInit {

  username="";
  eventId="";
  constructor(private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
  }

  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }

  getOne(){

    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };

    this.http.get("http://localhost:8080/api/condition/getOne?eventId="+this.eventId+"&username="+this.username,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  getAll(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };

    this.http.get("http://localhost:8080/api/condition/getAll?eventId="+this.eventId,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
}
