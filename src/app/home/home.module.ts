import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { NewsComponent } from './components/news/news.component';
import { FilterComponent } from './components/filter/filter.component';
import { NavComponent } from './components/nav/nav.component';
import { ReadComponent } from './components/read/read.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    FilterComponent,
    NavComponent,
    ReadComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
