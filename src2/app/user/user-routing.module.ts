import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:"user/profile",
    component: ProfileComponent
  },
  {
    path:"user/details",
    component: DetailsComponent
  },
  {
    path:"user/update",
    component: UpdateComponent
  },
  {
    path:"user/delete",
    component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
