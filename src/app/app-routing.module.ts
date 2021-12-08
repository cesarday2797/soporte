import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'mouse-modal',
    loadChildren: () => import('./hardware/mouse/mouse-modal/mouse-modal.module').then( m => m.MouseModalPageModule)
  },
  {
    path: 'crud-mouse',
    loadChildren: () => import('./hardware/mouse/crud-mouse/crud-mouse.module').then( m => m.CrudMousePageModule)
  },
  
  {
    path: 'crud-monitores',
    loadChildren: () => import('./hardware/mouse/crud-mouse/crud-mouse.module').then( m => m.CrudMousePageModule)
  },
  
  {
    path: 'monitores-modal',
    loadChildren: () => import('./hardware/mouse/crud-mouse/crud-mouse.module').then( m => m.CrudMousePageModule)
  },
  


  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'hardware',
    loadChildren: () => import('./hardware/hardware.module').then( m => m.HardwarePageModule)
  },
  {
    path: 'software',
    loadChildren: () => import('./software/software.module').then( m => m.SoftwarePageModule)
  },
  {
    path: 'salones',
    loadChildren: () => import('./salones/salones.module').then( m => m.SalonesPageModule)
  },
  {
    path: 'miembros-ts',
    loadChildren: () => import('./miembros-ts/miembros-ts.module').then( m => m.MiembrosTSPageModule)
  },
  {
    path: 'profesores',
    loadChildren: () => import('./profesores/profesores.module').then( m => m.ProfesoresPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
