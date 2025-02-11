import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { Reactive1Component } from './components/reactive1/reactive1.component';
import { HomeComponent } from './components/home/home.component';
import { Reactive2Component } from './components/reactive2/reactive2.component';
import { Reactive3Component } from './components/reactive3/reactive3.component';
import { Reactive4Component } from './components/reactive4/reactive4.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'driven', component: TemplateDrivenComponent },
  { path: 'reactive1', component: Reactive1Component },
  { path: 'reactive2', component: Reactive2Component },
  { path: 'reactive3', component: Reactive3Component },
  { path: 'reactive4', component: Reactive4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
