import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-set-votes',
  templateUrl: './set-votes.component.html',
  styleUrls: ['./set-votes.component.scss']
})
export class SetVotesComponent implements OnInit {

  eventId = "";
  constructor(private router:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
  }
  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }
  agree(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/event/setUserAgreement?eventId="+this.eventId,httpOptions).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }
  disagree(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/event/setUserDisagreement?eventId="+this.eventId,httpOptions).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }

}
