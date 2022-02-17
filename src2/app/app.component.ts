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
  constructor(private router:Router){}

  navigate(endpont:string) {
    this.router.navigate([endpont]);
  }
  test(){
    // var httpOptions = {
    //   headers: new HttpHeaders({
    //     // 'Authorization': 'Bearer '+environment.token})
    // };
  }
}



