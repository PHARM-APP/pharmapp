import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustumerComponent } from './custumer/custumer.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MemberComponent } from './member/member.component';
import { RegisterComponent } from './register/register.component';
import { DetailsproductsComponent } from './detailsproducts/detailsproducts.component';

import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  // { path: '/',redirectTo: '/login' },

  { path: 'login', component: LoginComponent },
  { path: 'custumer', component: CustumerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'member', component: MemberComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allproducts', component: DetailsproductsComponent },
  { path: '', component: FirstPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  CustumerComponent,
  ProductComponent,
  MemberComponent,
  NavbarComponent,
  RegisterComponent,
  DetailsproductsComponent,
  FirstPageComponent,
];
