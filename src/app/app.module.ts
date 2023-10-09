import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {LivroModule} from "./pages/livro/livro.module";

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import { ConfirmationDialog } from './core/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {EmprestimoModule} from "./pages/emprestimos/emprestimo.module";


import {LoaderModule} from "./arquitetura/loader/loader.module";
import {LoaderDialogComponent} from "./arquitetura/loader-dialog/loader-dialog.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AutenticacaoModule} from "./arquitetura/autenticacao/autenticacao.module";
import {SecurityModule} from "./arquitetura/security/security.module";
import {SecurityInterceptor} from "./arquitetura/security/security.interceptor";
import {MessageModule} from "./arquitetura/message/message.module";
import {AppInterceptor} from "./arquitetura/app.interceptor";
import { HomeProfileComponent } from './pages/profie/home-profile/home-profile.component';
import { ListEmprestimoProfileComponent } from './pages/profie/list-emprestimo-profile/list-emprestimo-profile.component';
import {ProfileModule} from "./pages/profile/profile.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationDialog,
    LoaderDialogComponent,
    HomeProfileComponent,
    ListEmprestimoProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LivroModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    EmprestimoModule,
    ProfileModule,
    MessageModule,
    SecurityModule,
    AutenticacaoModule,
    MatProgressSpinnerModule,
    AutenticacaoModule,
    LoaderModule,
    MessageModule.forRoot(),
    SecurityModule,//TODO conferir a configuração
    SecurityModule.forRoot({
      nameStorage: 'portalSSOSecurityStorage',
      loginRouter: '/acesso/login'
    }),
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
