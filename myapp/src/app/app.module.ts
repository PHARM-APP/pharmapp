import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';
import { ChartComponent } from './chart/chart.component';

// import { DetailsproductsComponent } from './detailsproducts/detailsproducts.component';
// import { DetailsprodComponent } from './services/detailsprod/detailsprod.component';
// import { Detailsprod } from './services/detailsprod.ts/detailsprod.ts.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ChartComponent,
    // DetailsprodComponent,
    // Detailsprod.TsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
