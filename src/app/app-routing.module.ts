import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFormComponent } from './page-form/page-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'song', component: PageFormComponent },
  { path: 'dash', component: DashboardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dash' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
