import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ConfirmInGuard } from './core/guards/confirm-in.guard';
import { ConfirmOutGuard } from './core/guards/confirm-out.guard';
import { DataService } from './core/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ItalicDirective } from './core/directive/italic.directive';


const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2/:parameter', component: Page2Component, canActivate: [ConfirmInGuard] },
  { path: 'page3', component: Page3Component, canDeactivate: [ConfirmOutGuard] },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    NotFoundComponent,
    ItalicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
