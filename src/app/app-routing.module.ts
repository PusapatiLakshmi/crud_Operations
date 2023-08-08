import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [

    // {path: '', redirectTo: "employee", pathMatch: "full"},
  // { path: "", component: LoginFormComponent },
  { path: "login", component: LoginFormComponent },
  // { path: "employee", component: EmployeeComponent }
  // {path: "first", component: FirstprogramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings=[
                          LoginFormComponent,
                          EmployeeComponent
]
