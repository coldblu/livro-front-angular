import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {livroRoutes} from "./pages/livro/livro-routing.module";
import {emprestimoRoutes} from "./pages/emprestimos/emprestimo-routing.module";
import {AutenticacaoRoutes} from "./arquitetura/autenticacao/autenticacao.routing";
import {SecurityGuard} from "./arquitetura/security/security.guard";
import {profileRoutes} from "./pages/profile/profile-routing.module";

const routes: Routes = [
  /*{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },*/
  {
    path: "",
    component: HomeComponent,
    children: [
      ...livroRoutes,
      ...emprestimoRoutes,
        ...profileRoutes
    ],
    canActivate: [SecurityGuard],
    data: {security: {roles: ['ROLE_USER', 'ROLE_ADMIN']}}

  },
  {
    path: "acesso",
    children: [
      ...AutenticacaoRoutes
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
