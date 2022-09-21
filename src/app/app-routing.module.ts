import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphDetailComponent } from './graph-detail/graph-detail.component';
import { InformationDetailComponent } from './information-detail/information-detail.component';

const routes: Routes = [
  {
    path: 'informacion-elemento', component: InformationDetailComponent
  },
  {
    path: 'analisis-grafico', component: GraphDetailComponent
  },
  {
    path: '', redirectTo: "/informacion-elemento", pathMatch: 'full'
  },
  {
    path: "**", component: InformationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
