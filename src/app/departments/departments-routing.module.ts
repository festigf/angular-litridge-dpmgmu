import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentsComponent} from './departments/departments.component';
import {ListDepartmentsComponent} from './departments/list-departments/list-departments.component';

const routes: Routes = [
  {path: '', component: DepartmentsComponent,
    children: [
      //{path: 'addUtente', component: CustomerComponent},
      {path: 'listDepartments', component: ListDepartmentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
