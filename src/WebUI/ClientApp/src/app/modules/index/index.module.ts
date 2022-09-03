import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './containers/landing/landing.component';
import { IndexRoutingModule } from './index-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './index.component';



@NgModule({
  declarations: [
    IndexComponent,
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    IndexRoutingModule,
    CommonModule
  ]
})
export class IndexModule { }
