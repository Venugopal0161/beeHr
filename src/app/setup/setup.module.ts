import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BranchInfoComponent } from './branch-info/branch-info.component';
import { CompanyComponent } from './company/company.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    CompanyComponent,
    SetupComponent,
    BranchInfoComponent,
  ],
  imports: [
    SharedModule,
     SetupRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  

})
export class SetupModule { }
