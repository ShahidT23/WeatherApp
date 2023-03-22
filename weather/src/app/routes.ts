import { Routes } from '@angular/router';
import{ProfileComponent} from './components/profile/profile.component'

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import ('./components/home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'info',
    loadChildren: () => import ('./components/info/info.module')
      .then(m => m.InfoModule)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'profile', component: ProfileComponent },

  {
    path: '**',
    loadChildren: () => import ('./components/page-not-found/page-not-found.module')
      .then(m => m.PageNotFoundModule),
  },

];

