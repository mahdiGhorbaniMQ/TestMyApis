import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import { webSocket } from "rxjs/webSocket";
import { environment } from 'src/environments/environment';
const subject = webSocket("ws://localhost:8080/app/chat/1");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "testing APIs"
  message:String="";
  contact:String="";
  constructor(private router:Router,
              private http:HttpClient){}

  navigate(endpont:string) {
    this.router.navigate([endpont]);
  }
  test(){
    // var httpOptions = {
    //   headers: new HttpHeaders({
    //     // 'Authorization': 'Bearer '+environment.token})
    // };
  }
  generate(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/key/generate",httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");

      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  get(){

    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    var reqBody = {
      message:this.message
    }
    this.http.post("http://localhost:8080/api/key/getCryptMessage",reqBody,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
        localStorage.setItem("message",response.message);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  send(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    var reqBody = {
      message:localStorage.getItem("message")
    }
    this.http.post("http://localhost:8080/api/key/encryptMessage",reqBody,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  addContact(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/contact/add?contact="+this.contact,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  removeContact(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/contact/remove?contact="+this.contact,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  addChatroom(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/chatroom/add?contact="+this.contact,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  removeChatroom(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/chatroom/remove?contact="+this.contact,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  getChatroomDetails(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/chatroom/details?chatroomId="+this.contact,httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        alert("ok");
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
  getChatroomMessages(){

  }
}



