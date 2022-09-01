import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './containers/landing/landing.component';
import { IndexRoutingModule } from './index-routing.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    IndexRoutingModule,
    CommonModule
  ]
})
export class IndexModule { }
