import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustumerComponent } from './custumer/custumer.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import {ChartComponent} from './chart/chart.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { BillComponent } from './bill/bill.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  // { path: '/',redirectTo: '/login' },


  {path:'login' , component:LoginComponent},
  {path:'custumer', component:CustumerComponent},
  {path:'product' , component:ProductComponent},
  {path:'navbar' , component:NavbarComponent},
  {path: 'member', component:MemberComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'bill', component:BillComponent},
  {path:'chart' , component:ChartComponent},
  { path: '', component: FirstPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})


export class AppRoutingModule { }
export const routingComponents = [LoginComponent,BillComponent,CustumerComponent,ChartComponent,ProductComponent,MemberComponent,NavbarComponent,RegisterComponent, FirstPageComponent,
]






