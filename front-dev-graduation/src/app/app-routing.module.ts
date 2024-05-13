// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { DealComponent } from './deal/deal.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'deals', component: DealComponent },
  { path: 'complaints', component: ComplaintComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }