import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  eventId="";
  title="";
  descriptions="";
  places:String[]=[];
  dates:String[]=[];
  date="";
  place="";
  constructor(private router:Router,
              private http:HttpClient) { }

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

  update(){
    var reqBody={
      title:this.title,
      descriptions:this.descriptions,
      places:this.places,
      dates:this.dates
    };
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };

    this.http.put("http://localhost:8080/api/event/update?eventId="+this.eventId,reqBody,httpOptions).subscribe(
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
