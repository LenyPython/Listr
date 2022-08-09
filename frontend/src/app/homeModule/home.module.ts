import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from 'src/app/homeModule/components/home.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
})
export class HomeModule {}
