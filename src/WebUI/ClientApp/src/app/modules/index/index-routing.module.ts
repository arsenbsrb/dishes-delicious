import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './containers/landing/landing.component';
import { IndexComponent } from './index.component';

export const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: LandingComponent }


  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
