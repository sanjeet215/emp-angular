import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardModComponent } from './dashboard-mod/dashboard-mod.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { VieworganizationComponent } from './vieworganization/vieworganization.component';
import { AddorganizationComponent } from './addorganization/addorganization.component';
import { AddempComponent } from './addemp/addemp.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-board',
    component : DashboardAdminComponent
  },
  {
    path: 'user-board',
    component : DashboardUserComponent
  },

  {
    path: 'mod-board',
    component : DashboardModComponent
  },

  {
    path: 'viewemp',
    component : ViewempComponent
  },
  {
    path: 'vieworg',
    component : VieworganizationComponent
  },
  {
    path: 'addorg',
    component : AddorganizationComponent
  },
  {
    path: 'addemp',
    component : AddempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
