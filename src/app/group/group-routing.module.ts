import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:"group/create",
    component: CreateComponent
  },
  {
    path:"group/profile",
    component: ProfileComponent
  },
  {
    path:"group/details",
    component: DetailsComponent
  },
  {
    path:"group/update",
    component: UpdateComponent
  },
  {
    path:"group/addUser",
    component: AddUserComponent
  },
  {
    path:"group/removeUser",
    component: RemoveUserComponent
  },
  {
    path:"group/delete",
    component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
