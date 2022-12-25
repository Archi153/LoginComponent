import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecurePageComponent} from "./secured/secure-page/secure-page.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./auth/login/login.component";
import {NotAuthGuard} from "./auth/not-auth.guard";
import {AnotherSecurePageComponent} from "./secured/another-secure-page/another-secure-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'secure-page',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'secure-page',
    component: SecurePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'another-secure-page',
    component: AnotherSecurePageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
