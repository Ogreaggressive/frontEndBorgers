import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BurgerListComponent} from './components/burger-list/burger-list.component'
import {BurgerFormComponent} from './components/burger-form/burger-form.component'

const routes: Routes = [
  {
    path: '',
    component: BurgerListComponent
  },
  {
    path: 'burger',
    component: BurgerListComponent
  },
  {
    path: 'burger/create',
    component: BurgerFormComponent
  },
  {
    path: 'burger/edit/:id',
    component: BurgerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
