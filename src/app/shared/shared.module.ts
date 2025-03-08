import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule, FormsModule,RouterModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
