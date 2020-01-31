import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListUtentiComponent } from './utenti-dashboard/list-utenti/list-utenti.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import {DepartmentsComponent} from './departments/departments.component';


@NgModule({
  declarations: [DepartmentsComponent,ListUtentiComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,SharedModule
  ]
})
export class DepartmentsModule { }
