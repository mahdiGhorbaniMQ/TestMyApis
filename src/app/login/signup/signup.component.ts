import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  firstName="";
  lastName="";
  email="";
  username="";
  password="";
  constructor(private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
  }

  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }

  create(){
    var reqBody={
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      username:this.username,
      password:this.password
    };
    this.http.post("http://localhost:8080/api/auth/signup",reqBody).subscribe(
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
