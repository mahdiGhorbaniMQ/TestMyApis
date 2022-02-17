import { Component, OnInit } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  eventId:String="";
  message:String="";
  stompClient:any = null;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  connect(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    this.http.get("http://localhost:8080/api/message/all?eventId="+this.eventId,httpOptions).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    const socket = new SockJS('http://localhost:8080/websocket/event/'+this.eventId,httpOptions);
    this.stompClient = Stomp.Stomp.over(socket);
    const _this = this;
    this.stompClient!.connect({}, function (frame:any) {
      _this.stompClient!.subscribe('/event/'+_this.eventId+'/messages', function (message:any) {
        _this.getMessage(message);
      });
    });
  }
  disconnect(){
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }
  getMessage(message:any){
    console.log(JSON.parse(message.body));
  }
  sendMessage() {
    var message ={
      writer:localStorage.getItem("username"),
      content:this.message,
      eventId:this.eventId
    };
    this.stompClient.send(
      '/controller/'+this.eventId+'/messages',
      {},
      JSON.stringify(message)
    );
  }
}
