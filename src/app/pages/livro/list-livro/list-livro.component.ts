import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LivroDto} from "../../../api/models/livro-dto";
import {LivroControllerService} from "../../../api/services/livro-controller.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmationDialog,  ConfirmationDialogResult} from "../../../core/confirmation-dialog/confirmation-dialog.component";

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
    private dialog: MatDialog,
    private snackBar: MatSnackBar
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
