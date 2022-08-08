import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { HomePage } from './pages/home/home.component';
import { LoginPage } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'dashboard', component: DashboardPage },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
