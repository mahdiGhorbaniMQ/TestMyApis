import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { GroupRoutingModule } from './group-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventModule } from '../event/event.module';



@NgModule({
  declarations: [
    GroupComponent,
    CreateComponent,
    DetailsComponent,
    ProfileComponent,
    DeleteComponent,
    UpdateComponent,
    AddUserComponent,
    RemoveUserComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    GroupRoutingModule,
    EventModule
  ]
})
export class GroupModule { }
