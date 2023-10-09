import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecurityGuard} from "../../arquitetura/security/security.guard";
import {ListEmprestimoProfileComponent} from "./list-emprestimo-profile/list-emprestimo-profile.component";
import {HomeProfileComponent} from "./home-profile/home-profile.component";

export const profileRoutes: Routes = [
  {
    path: "profile",
    component: HomeProfileComponent,
    children: [
      {
        path: "",
        component: ListEmprestimoProfileComponent
      }
    ],
    canActivate: [SecurityGuard],
    data: {security: {roles: ['ROLE_USER']}}
  }
];
