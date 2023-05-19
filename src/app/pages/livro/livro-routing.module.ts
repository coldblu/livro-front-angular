import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeLivroComponent} from "./home-livro/home-livro.component";
import {ListLivroComponent} from "./list-livro/list-livro.component";

export const livroRoutes: Routes = [
  {
    path: "livros",
    component: HomeLivroComponent,
    children: [
      {
        path: "",
        component: ListLivroComponent
      }
    ]
  }
];
