import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-votes',
  templateUrl: './get-votes.component.html',
  styleUrls: ['./get-votes.component.scss']
})
export class GetVotesComponent implements OnInit {

  eventId="";
  constructor(private http:HttpClient,
              private router:Router) { }
  ngOnInit(): void {
  }

  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }

  get(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };

    this.http.get("http://localhost:8080/api/event/votes?eventId="+this.eventId,httpOptions).subscribe(
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
