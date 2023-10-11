import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeLivroComponent} from "./home-livro/home-livro.component";
import {ListLivroComponent} from "./list-livro/list-livro.component";
import {FormLivroComponent} from "./form-livro/form-livro.component";
import {SecurityGuard} from "../../arquitetura/security/security.guard";

export const livroRoutes: Routes = [
  {
    path: "livros",
    component: HomeLivroComponent,
    children: [
      {
        path: "",
        component: ListLivroComponent
      },
      {
        path: "novo",
        component: FormLivroComponent
      },
      {
        path: ":id",
        component: FormLivroComponent
      }
    ]
  }
];
