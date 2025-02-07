import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { Reactive1Component } from './components/reactive1/reactive1.component';
import { HomeComponent } from './components/home/home.component';
import { Reactive2Component } from './components/reactive2/reactive2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'driven', component: TemplateDrivenComponent },
  { path: 'reactive1', component: Reactive1Component },
  { path: 'reactive2', component: Reactive2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
