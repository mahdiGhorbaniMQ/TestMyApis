import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-from-group',
  templateUrl: './remove-from-group.component.html',
  styleUrls: ['./remove-from-group.component.scss']
})
export class RemoveFromGroupComponent implements OnInit {

  eventId = "";
  groupId = "";

  constructor(private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
  }
  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }
  remove(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };

    this.http.get("http://localhost:8080/api/event/removeEventFromGroup?groupId="+this.groupId+"&eventId="+this.eventId,httpOptions).subscribe(
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
