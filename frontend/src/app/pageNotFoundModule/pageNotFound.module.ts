import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from 'src/app/pageNotFoundModule/components/pageNotFound/pageNotFound.component';

const routes = [
  {
    path: '404',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
