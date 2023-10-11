import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LivroDto} from "../../../api/models/livro-dto";
import {LivroControllerService} from "../../../api/services/livro-controller.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmationDialog,  ConfirmationDialogResult} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import { Router } from '@angular/router';
import {SecurityService} from "../../../arquitetura/security/security.service";
import {EmprestimoControllerService} from "../../../api/services/emprestimo-controller.service";
import {EmprestimoDto} from "../../../api/models/emprestimo-dto";

@Component({
  selector: 'app-list-livro',
  templateUrl: './list-livro.component.html',
  styleUrls: ['./list-livro.component.scss'],
})
export class ListLivroComponent implements OnInit {
  colunasMostrar = ['id','titulo', 'autor', 'ano', 'editora','acao'];
  livroListaDataSource: MatTableDataSource<LivroDto> = new MatTableDataSource<LivroDto>();

  constructor(
    public livroService: LivroControllerService,
    public emprestimoService: EmprestimoControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private securityService: SecurityService
    ){
  }

  ngOnInit(): void {
    this.buscarDados();
  }



  private buscarDados() {
    this.livroService.listAll().subscribe(data => {
      this.livroListaDataSource.data = data;
      console.log(JSON.stringify(data));
    })
  }

  emprestarLivro(element: any) {
    if (this.securityService.hasRoles('ROLE_ADMIN')) {
      this.router.navigate(['/emprestimos/emprestar', element.idLivro]);
    } else if (this.securityService.hasRoles('ROLE_USER')) {
      // Execute a função aqui para usuários ROLE_USER
      // Por exemplo:
      this.realizarEmprestimo(element.idLivro);
    }
  }

  realizarEmprestimo(idLivro: number) {
    const body = {
      pessoaID: this.securityService.getPessoaId(),
      livroID: idLivro
    };
    this.emprestimoService.emprestar({ body })
      .subscribe(retorno => {
        console.log("Retorno:", retorno);
        this.confirmarInclusao(retorno);
      }, erro => {
        console.log("Erro:" + erro);
        alert("Erro ao incluir!");
      });
  }
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


  remover(livroDto: LivroDto) {
    console.log("Removido", livroDto.idLivro);
    let idDoLivro: number = livroDto.idLivro || 0;
    this.livroService.excluir({ id: idDoLivro,body: livroDto })
      .subscribe(
        retorno => {
          this.buscarDados();
          this.showMensagemSimples("Excluído com sucesso", 5000);
          console.log("Exclusão:", retorno);
        },
        error => {
          if (error.status === 404) {
            this.showMensagemSimples("Livro não existe mais");
          } else {
            this.showMensagemSimples("Erro ao excluir");
            console.log("Erro:", error);
          }
        }
      );
  }


  confirmarExcluir(livroDto: LivroDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Confirmar?',
        mensagem: `A exclusão de: ${livroDto.titulo} (ID: ${livroDto.idLivro})?`,
        textoBotoes: {
          ok: 'Confirmar',
          cancel: 'Cancelar',
        },
        dado: livroDto
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
      if (confirmed?.resultado) {
        this.remover(confirmed.dado);
      }
    });
  }
  showMensagemSimples( mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
