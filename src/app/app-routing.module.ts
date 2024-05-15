import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { isAdminGuard } from './guards/is-admin.guard';
import { isConnectedGuard } from './guards/is-connected.guard';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [isAdminGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [isConnectedGuard],
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
