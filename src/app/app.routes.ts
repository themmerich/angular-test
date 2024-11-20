import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TableComponent} from './table/table.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'table',
    component: TableComponent,
    title: 'Table'
  }
];
