import { Component } from '@angular/core';
import { EmprestimoDto } from 'src/app/api/models';
import {EmprestimoControllerService, LivroControllerService} from 'src/app/api/services';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmationDialog} from "../../../core/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-form-emprestimo',
  templateUrl: './form-emprestimo.component.html',
  styleUrls: ['./form-emprestimo.component.scss']
})
export class FormEmprestimoComponent {

  formGroup!: FormGroup;
  public readonly ACAO_EMPRESTAR = "emprestar";
  acao: string = this.ACAO_EMPRESTAR;
  id_livro!: number;

  constructor(
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    public emprestimoService: EmprestimoControllerService,
    public livroService: LivroControllerService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
    this._adapter.setLocale('pt-br');
    this.prepararEmprestimo();
  }

  createForm() {
      this.formGroup = this.formBuilder.group({
        pessoaID: [null, Validators.required],
        livroID: [null]
      })
  }

  onSubmit() {
    if (this.formGroup.valid) {
        this.realizarEmprestimo();
    }
  }

  private realizarEmprestimo() {

    console.log("Dados:",this.formGroup.value);
    this.emprestimoService.emprestar({body: this.formGroup.value})
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

  confirmarInclusao(emprestimoDto: EmprestimoDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Mensagem!!!',
        mensagem: `Emprestimo do Livro(ID): ${emprestimoDto.livroID} (ID emprestimo: ${emprestimoDto.idEmprestimo}) realiza com sucesso!`,
        textoBotoes: {
          ok: 'ok',
        },
      },
    });

  }
  private prepararEmprestimo() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId){
      const codigo = parseInt(paramId);
      console.log("codigo",paramId);
      this.livroService.buscar({id: codigo}).subscribe(
        retorno => {
          console.log("retorno", retorno);
          this.id_livro = retorno.idLivro || 0;
          this.formGroup.patchValue({
            livroID: this.id_livro
          });
        },error => {
              console.log("erro", error);
        }
      )
    }
}
  /*
  confirmarAcao(livroDto: LivroDto, acao: string) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Mensagem!!!',
        mensagem: `Ação de ${acao} dados: ${livroDto.titulo} (ID: ${livroDto.idLivro}) realizada com sucesso!`,
        textoBotoes: {
          ok: 'ok',
        },
      },
    });

  }*/
}
