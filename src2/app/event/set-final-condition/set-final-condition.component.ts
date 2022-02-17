import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-final-condition',
  templateUrl: './set-final-condition.component.html',
  styleUrls: ['./set-final-condition.component.scss']
})
export class SetFinalConditionComponent implements OnInit {

  eventId = "";
  finalDate = "";
  finalPlace = "";
  constructor(private router:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
  }

  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }

  set(){

    var httpOptions = {
      headers: new HttpHeaders({
       'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    var reqBody = {
      finalPlace:this.finalPlace,
      finalDate:this.finalDate
    }
    this.http.put("http://localhost:8080/api/event/setFinalCondition?eventId="+this.eventId,reqBody,httpOptions).subscribe(
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
