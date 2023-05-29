import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListLivroComponent } from './list-livro/list-livro.component';
import { HomeLivroComponent } from './home-livro/home-livro.component';
import {RouterModule} from "@angular/router";
import {livroRoutes} from "./livro-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from '@angular/material/table';
import { FormLivroComponent } from './form-livro/form-livro.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    ListLivroComponent,
    HomeLivroComponent,
    FormLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(livroRoutes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ]
})
export class LivroModule { }
