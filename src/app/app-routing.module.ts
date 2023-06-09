import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {livroRoutes} from "./pages/livro/livro-routing.module";
import {emprestimoRoutes} from "./pages/emprestimos/emprestimo-routing.module";

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
      ...emprestimoRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
