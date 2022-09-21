import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HighchartsChartModule } from 'highcharts-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { InformationDetailComponent } from './information-detail/information-detail.component';
import { GraphDetailComponent } from './graph-detail/graph-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    InformationDetailComponent,
    GraphDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
