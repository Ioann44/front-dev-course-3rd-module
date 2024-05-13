// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealListComponent } from './deal/deal-list/deal-list.component';
import { ComplaintListComponent } from './complaint/complaint-list/complaint-list.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'deals', component: DealListComponent },
  { path: 'complaints', component: ComplaintListComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }