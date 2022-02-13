import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductModule } from './product/product.module';
import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: '',redirectTo: 'products',pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
