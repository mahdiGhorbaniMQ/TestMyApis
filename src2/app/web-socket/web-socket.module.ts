import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSocketRoutingModule } from './web-socket-routing.module';
import {WebSocketComponent} from "./web-socket.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    WebSocketComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    WebSocketRoutingModule
  ]
})
export class WebSocketModule { }
