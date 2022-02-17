import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  groupId = "";
  name = "";
  bio = "";
  constructor(private router:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
  }

  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }

  update(){

    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    var reqBody = {
      name:this.name,
      bio:this.bio
    }
    this.http.put("http://localhost:8080/api/group/update?groupId="+this.groupId,reqBody,httpOptions).subscribe(
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
