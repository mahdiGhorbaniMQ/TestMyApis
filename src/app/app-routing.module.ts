import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {EventComponent} from "./event/event.component";
import {WebSocketComponent} from "./web-socket/web-socket.component";

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"user",
    component: UserComponent
  },
  {
    path:"group",
    component: GroupComponent
  },
  {
    path:"event",
    component: EventComponent
  },
  {
    path:"socket",
    component: WebSocketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
