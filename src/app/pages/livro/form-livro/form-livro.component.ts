import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LivroControllerService} from "../../../api/services/livro-controller.service";
import {DateAdapter} from "@angular/material/core";

import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {LivroDto} from "../../../api/models/livro-dto";
import {ConfirmationDialog} from "../../../core/confirmation-dialog/confirmation-dialog.component";


@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.scss']
})
export class FormLivroComponent {
  formGroup!: FormGroup;
  public readonly ACAO_INCLUIR = "Incluir";
  public readonly ACAO_EDITAR = "Editar";
  acao: string = this.ACAO_INCLUIR;
  id_livro!: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    public livroService: LivroControllerService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
    this._adapter.setLocale('pt-br');
    //this.prepararEdicao();

  }

  createForm() {
    if(this.acao == "Editar"){
      this.livroService.buscar({id: this.id_livro}).subscribe(retorno =>
        this.formGroup = this.formBuilder.group({
          titulo: [retorno.titulo, Validators.required],
          autor: [retorno.autor, Validators.required],
          editora: [retorno.editora, Validators.required],
          anoPubli: [retorno.anoPublicacao, Validators.required],
          genero: [retorno.genero, Validators.required],
          paginas: [retorno.numeroDePaginas, Validators.required]
        }));
    }else{
      this.formGroup = this.formBuilder.group({
        titulo: [null, Validators.required],
        autor: [null, Validators.required],
        editora: [null, Validators.required],
        anoPubli: [null, Validators.required],
        genero: [null, Validators.required],
        paginas: [null, Validators.required]
      })
    }
  }

  onSubmit() {
    if (this.formGroup.valid) {
      if(!this.id_livro){
        this.realizarInclusao();
      }else{
        //this.realizarEdicao();
      }
    }

  }

  private realizarInclusao() {
    console.log("Dados:",this.formGroup.value);
    this.livroService.incluir({body: this.formGroup.value})
      .subscribe( retorno =>{
        console.log("Retorno:",retorno);
        this.confirmarInclusao(retorno);
      }, erro =>{
        console.log("Erro:"+erro);
        alert("Erro ao incluir!");
      })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  confirmarInclusao(livroDto: LivroDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Mensagem!!!',
        mensagem: `Inclusão de: ${livroDto.titulo} (ID: ${livroDto.idLivro}) realiza com sucesso!`,
        textoBotoes: {
          ok: 'ok',
        },
      },
    });

  }
/*
  private prepararEdicao() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId){
      const codigo = parseInt(paramId);
      console.log("id",paramId);
      this.livroService.buscar({id: this.id_livro}).subscribe(
        retorno => {
          this.acao = this.ACAO_EDITAR;
          console.log("retorno", retorno);
          this.id_livro = retorno.idLivro;
          this.formGroup.patchValue(retorno);
        }
      )
    }
  }

  private realizarEdicao() {
    console.log("Dados:", this.formGroup.value);
    this.livroService.alterar( body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarAcao(retorno, this.ACAO_EDITAR);
        this.router.navigate(["/livros"]);
      }, erro => {
        console.log("Erro:", erro.error);
        this.showError(erro.error, this.ACAO_EDITAR);
      };)
  }*/
}
