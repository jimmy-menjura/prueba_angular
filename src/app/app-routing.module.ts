import { NgModule } from '@angular/core';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const redirectUnauthorizedToLogin = () =>redirectUnauthorizedTo(['/']);
const redirectLoggedInToPublicaciones = () => redirectLoggedInTo(['/publicaciones']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    ...canActivate(redirectLoggedInToPublicaciones)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pagina/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'publicaciones',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./pagina/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'info-imagenes',
    loadChildren: () => import('./pagina/info-imagenes/info-imagenes.module').then( m => m.InfoImagenesPageModule)
  },
  {
    path: 'info-chat',
    loadChildren: () => import('./pagina/info-chat/info-chat.module').then( m => m.InfoChatPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
