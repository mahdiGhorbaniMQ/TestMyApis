import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {


  username:string = "";
  password:String = ""

  constructor(private router:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
  }

  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }

  signin(){
    var reqBody={
      username: this.username,
      password: this.password
    }
    this.http.post("http://localhost:8080/api/auth/signin",reqBody).subscribe(
      (response:any)=>{
        console.log(response);
        localStorage.setItem("token",response.token);
        localStorage.setItem("username",response.username);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

}
