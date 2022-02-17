import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {HttpHeaders} from "@angular/common/http";
@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  id:String="";
  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }
  stompClient:any = null;
  connect(id:String) {
    this.id = id;
    var httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem("token")
      })
    };
    const socket = new SockJS('http://localhost:8080/websocket/event/'+id,httpOptions);
    this.stompClient = Stomp.Stomp.over(socket);
    const _this = this;
    this.stompClient!.connect({}, function (frame:any) {
      _this.stompClient!.subscribe('/event/'+id+'/messages', function (hello:any) {
        _this.showGreeting(JSON.parse(hello.body).greeting);
      });
    });
  }
  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }
  name="mahdi";
  sendName() {
    this.stompClient.send(
      '/controller/'+this.id+'/messages',
      {},
      JSON.stringify({ 'name': this.name })
    );
  }
  showGreeting(greeting:any){
    console.log(greeting)
  }
}
