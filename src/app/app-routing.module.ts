import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './componenti/login/login.component';
import { RegisterComponent } from './componenti/register/register.component';
import { Pagina1Component } from './componenti/pagina1/pagina1.component';
import { Pagina2Component } from './componenti/pagina2/pagina2.component';
import { Pagina3Component } from './componenti/pagina3/pagina3.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'pagina1', pathMatch: 'full' },
      { path: 'pagina1', component: Pagina1Component },
      { path: 'pagina2', component: Pagina2Component },
      { path: 'pagina3', component: Pagina3Component },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
