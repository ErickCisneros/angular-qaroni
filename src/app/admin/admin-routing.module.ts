import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DetailGroupComponent } from './components/detail-group/detail-group.component';
import { GroupsComponent } from './components/groups/groups.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'groups', component: GroupsComponent },
      { path: 'groups/read/:slug', component: DetailGroupComponent },
      { path: '', redirectTo: 'groups', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
