import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListLivroComponent } from './list-livro/list-livro.component';
import { HomeLivroComponent } from './home-livro/home-livro.component';
import {RouterModule} from "@angular/router";
import {livroRoutes} from "./livro-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ListLivroComponent,
    HomeLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(livroRoutes),
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LivroModule { }
