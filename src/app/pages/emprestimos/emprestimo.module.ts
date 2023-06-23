import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {FormEmprestimoComponent} from "./form-emprestimo/form-emprestimo.component";
import {HomeEmprestimoComponent} from "./home-emprestimo/home-emprestimo.component";
import {ListEmprestimoComponent} from "./list-emprestimo/list-emprestimo.component";
import {emprestimoRoutes} from "./emprestimo-routing.module";
import { ListEmprestimoFinalizadosComponent } from './list-emprestimo-finalizados/list-emprestimo-finalizados.component';

@NgModule({
  declarations: [
    FormEmprestimoComponent,
    HomeEmprestimoComponent,
    ListEmprestimoComponent,
    ListEmprestimoFinalizadosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(emprestimoRoutes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ]
})
export class EmprestimoModule { }
