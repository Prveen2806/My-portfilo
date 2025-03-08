import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAboutMeComponent } from './main-components/main-about-me/main-about-me.component';

const routes: Routes = [
  {path: '', component: MainAboutMeComponent, pathMatch: 'full' },
  {path: 'home', component: MainAboutMeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
