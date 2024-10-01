import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/components/login.component';
import { FirstTimeLoginComponent } from './pages/first-time-login/components/first-time-login.component';
import { HomeComponent } from './pages/home/components/home.component';

const routes: Routes = 
[
  { path: '', component: LoginComponent }, // Default route
  {path: 'first-time-login',component: FirstTimeLoginComponent},
  {path: 'home',component: HomeComponent},

  { path: '**', redirectTo: '' }, // Redirect any unknown paths to the login component



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
