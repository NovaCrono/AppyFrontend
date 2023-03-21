import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'Start',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Sesion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabulacion',
    loadChildren: () => import('./Sesion/tabulacion/tabulacion.module').then( m => m.TabulacionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Sesion/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'option',
    loadChildren: () => import('./Sesion/options/options.module').then( m => m.OptionsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
