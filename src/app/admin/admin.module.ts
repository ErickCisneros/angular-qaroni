import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GroupsComponent } from './components/groups/groups.component';
import { AdminComponent } from './admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';
import { DetailGroupComponent } from './components/detail-group/detail-group.component';

@NgModule({
  declarations: [
    GroupsComponent,
    AdminComponent,
    DetailGroupComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class AdminModule { }
