import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-set-conditoin',
  templateUrl: './set-conditoin.component.html',
  styleUrls: ['./set-conditoin.component.scss']
})
export class SetConditoinComponent implements OnInit {

  eventId = "";
  places:String[]=[];
  dates:String[]=[];
  date="";
  place="";
  constructor(private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
  }

  addPlace(){
    if(this.place != "") {
      this.places.push(this.place);
      this.place = "";
    }
  }
  addDate(){
    if(this.date != "") {
      this.dates.push(this.date);
      this.date = "";
    }
  }
  removePlace(index:number){
    this.places.splice(index,1);
  }
  removeDate(index:number){
    this.dates.splice(index,1);
  }

  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }

  set(){
    var reqBody = {
      dates: this.dates,
      places: this.places
    }
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };

    this.http.post("http://localhost:8080/api/condition/set?eventId="+this.eventId,reqBody,httpOptions).subscribe(
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
