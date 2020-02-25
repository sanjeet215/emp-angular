import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardModComponent } from './dashboard-mod/dashboard-mod.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../app/_helper/auth.interceptor';
import { VieworganizationComponent } from './vieworganization/vieworganization.component';
import { AddorganizationComponent } from './addorganization/addorganization.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AboutComponent } from './about/about.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { DepartmentComponent } from './department/department.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { UpdatedeptComponent } from './updatedept/updatedept.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    DashboardModComponent,
    MenubarComponent,
    AddempComponent,
    ViewempComponent,
    VieworganizationComponent,
    AddorganizationComponent,
    AdduserComponent,
    AboutComponent,
    ViewuserComponent,
    DepartmentComponent,
    AdddepartmentComponent,
    UpdatedeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
