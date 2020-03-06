import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('./pages/about/about.module').then( m => m.AboutModule)
      },
      {
        path: 'padrinos',
        loadChildren: () => import('./pages/sponsors/sponsors.module').then( m => m.SponsorsModule)
      },
      {
        path: 'coordinadores',
        loadChildren: () => import('./pages/coordinators/coordinators.module').then( m => m.CoordinatorsModule)
      },
      {
        path: 'escuelas',
        loadChildren: () => import('./pages/school/school.module').then( m => m.SchoolModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
