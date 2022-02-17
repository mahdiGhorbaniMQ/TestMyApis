import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {

  username = "";
  groupId = "";
  constructor(private router:Router,
              private http:HttpClient) { }
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
    this.http.get("http://localhost:8080/api/group/removeUser?username="+this.username+"&groupId="+this.groupId,httpOptions)
    .subscribe(
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
