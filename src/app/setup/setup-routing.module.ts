import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchInfoComponent } from './branch-info/branch-info.component';
import { CompanyComponent } from './company/company.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SetupComponent } from './setup.component';

const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    children: [
      { path: '', redirectTo: 'company', pathMatch: 'full' },
      { path: 'company', component: CompanyComponent },
      { path: 'branch', component: BranchInfoComponent },
      { path: 'dept', component: DepartmentsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
