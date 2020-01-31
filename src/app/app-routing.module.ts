import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
/*import { LoginComponent } from './admin/login/login.component';
import { AdminChildGuard } from './admin/admin-child.guard';*/
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',    redirectTo: 'home',    pathMatch: 'full'  },
  { path: 'home', component: HomeComponent},
  /*{ path: 'login', component: LoginComponent},*/
  { path: 'departments' , loadChildren: './departments/departments.module#DepartmentsModule' },
  /*{ path: 'noleggi' , loadChildren: './noleggi/noleggi.module#NoleggiModule', canActivateChild: [AdminChildGuard] },*/
  { path: '**' , component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
