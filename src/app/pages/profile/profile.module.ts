import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { ListEmprestimoProfileComponent } from './list-emprestimo-profile/list-emprestimo-profile.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterOutlet} from "@angular/router";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    HomeProfileComponent,
    ListEmprestimoProfileComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterOutlet,
    MatTableModule
  ]
})
export class ProfileModule { }
