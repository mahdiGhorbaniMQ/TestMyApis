import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-group',
  templateUrl: './add-to-group.component.html',
  styleUrls: ['./add-to-group.component.scss']
})
export class AddToGroupComponent implements OnInit {

  eventId = "";
  groupId = "";

  constructor(private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
  }
  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }
  add(){

    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };

    this.http.get("http://localhost:8080/api/event/addEventToGroup?groupId="+this.groupId+"&eventId="+this.eventId,httpOptions).subscribe(
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
