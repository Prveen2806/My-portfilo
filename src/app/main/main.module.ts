import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainAboutMeComponent } from './main-components/main-about-me/main-about-me.component';


@NgModule({
  declarations: [
    MainAboutMeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
