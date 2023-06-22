import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeEmprestimoComponent } from './home-emprestimo/home-emprestimo.component';
import { ListEmprestimoComponent } from './list-emprestimo/list-emprestimo.component';
import { FormEmprestimoComponent } from './form-emprestimo/form-emprestimo.component';

export const emprestimoRoutes: Routes = [
  {
    path: "emprestimos",
    component: HomeEmprestimoComponent,
    children: [
      {
        path: "",
        component: ListEmprestimoComponent
      },
      {
        path: "emprestar/:id",
        component: FormEmprestimoComponent
      }
    ]
  }
];
