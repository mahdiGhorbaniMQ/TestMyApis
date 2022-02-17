import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetFinalConditionComponent } from './set-final-condition/set-final-condition.component';
import { RemoveFromGroupComponent } from './remove-from-group/remove-from-group.component';
import { AddToGroupComponent } from './add-to-group/add-to-group.component';
import {CreateComponent} from "./create/create.component";
import {DeleteComponent} from "./delete/delete.component";
import {UpdateComponent} from "./update/update.component";
import {DetailsComponent} from "./details/details.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {EventRoutingModule} from "./event-routing.module";
import {EventComponent} from "./event.component";
import { SetVotesComponent } from './set-votes/set-votes.component';
import { SetConditoinComponent } from './set-conditoin/set-conditoin.component';
import { GetConditionComponent } from './get-condition/get-condition.component';
import { GetVotesComponent } from './get-votes/get-votes.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    EventComponent,
    SetFinalConditionComponent,
    RemoveFromGroupComponent,
    AddToGroupComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    DetailsComponent,
    SetVotesComponent,
    SetConditoinComponent,
    GetConditionComponent,
    GetVotesComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    EventRoutingModule
  ]
})
export class EventModule { }
