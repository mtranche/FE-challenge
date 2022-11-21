import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [  
  {path: 'home', component: MainComponent},
  {path: 'tvshows', component: MainComponent},
  {path: 'tvshows/show/:id', component: DetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
