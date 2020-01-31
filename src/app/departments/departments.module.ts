import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {ListDepartmentsComponent} from './departments/list-departments/list-departments.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import {DepartmentsComponent} from './departments/departments.component';


@NgModule({
  declarations: [DepartmentsComponent,ListDepartmentsComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,SharedModule
  ]
})
export class DepartmentsModule { }
