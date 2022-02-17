import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import {AddToGroupComponent} from "./add-to-group/add-to-group.component";
import {RemoveFromGroupComponent} from "./remove-from-group/remove-from-group.component";
import {SetFinalConditionComponent} from "./set-final-condition/set-final-condition.component";
import {SetVotesComponent} from "./set-votes/set-votes.component";
import {GetVotesComponent} from "./get-votes/get-votes.component";
import {GetConditionComponent} from "./get-condition/get-condition.component";
import {SetConditoinComponent} from "./set-conditoin/set-conditoin.component";
import {MessageComponent} from "./message/message.component";

const routes: Routes = [
  {
    path:"event/setVote",
    component: SetVotesComponent
  },
  {
    path:"event/getVotes",
    component: GetVotesComponent
  },
  {
    path:"event/setCondition",
    component: SetConditoinComponent
  },
  {
    path:"event/getCondition",
    component: GetConditionComponent
  },
  {
    path:"event/create",
    component: CreateComponent
  },
  {
    path:"event/message",
    component: MessageComponent
  },
  {
    path:"event/setFinalCondition",
    component: SetFinalConditionComponent
  },
  {
    path:"event/details",
    component: DetailsComponent
  },
  {
    path:"event/update",
    component: UpdateComponent
  },
  {
    path:"event/removeFromGroup",
    component: RemoveFromGroupComponent
  },
  {
    path:"event/addToGroup",
    component: AddToGroupComponent
  },
  {
    path:"event/delete",
    component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
