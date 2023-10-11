import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EmprestimoDto} from "../../../api/models/emprestimo-dto";
import {EmprestimoControllerService} from "../../../api/services/emprestimo-controller.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  ConfirmationDialog,
  ConfirmationDialogResult
} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {SecurityService} from "../../../arquitetura/security/security.service";

@Component({
  selector: 'app-list-emprestimo-profile',
  templateUrl: './list-emprestimo-profile.component.html',
  styleUrls: ['./list-emprestimo-profile.component.scss']
})
export class ListEmprestimoProfileComponent implements OnInit{

  colunasMostrar = ['idEmprestimo','livroID', 'dataEmprestimo','acao'];
  emprestimoDataSource: MatTableDataSource<EmprestimoDto> = new MatTableDataSource<EmprestimoDto>();

  constructor(
    public emprestimoService: EmprestimoControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private securityService: SecurityService
  ){
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.emprestimoService.listarEmprestimosAtivosDaPessoa(this.securityService.getPessoaId()).subscribe(data => {
      this.emprestimoDataSource.data = data;
      console.log(data);
    })
  }

  finalizar(emprestimoDto: EmprestimoDto) {
    console.log("Finalizado", emprestimoDto.livroID);
    let idDoEmprestimo: number = emprestimoDto.idEmprestimo || 0;
    this.emprestimoService.devolucao({ id: idDoEmprestimo})
      .subscribe(
        retorno => {
          this.buscarDados();
          this.showMensagemSimples("Devolução realziada com sucesso", 5000);
          console.log("Devolução:", retorno);
        },
        error => {
          if (error.status === 404) {
            this.showMensagemSimples("Emprestimo não existe");
          } else {
            this.showMensagemSimples("Erro ao devolver livro.");
            console.log("Erro:", error);
          }
        }
      );
  }


  confirmarFinalizar(emprestimoDto: EmprestimoDto) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Confirmar?',
        mensagem: `Devolução do livro(ID): ${emprestimoDto.idEmprestimo} ?`,
        textoBotoes: {
          ok: 'Confirmar',
          cancel: 'Cancelar',
        },
        dado: emprestimoDto
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
      if (confirmed?.resultado) {
        this.finalizar(confirmed.dado);
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
