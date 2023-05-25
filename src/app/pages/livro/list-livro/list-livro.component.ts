import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LivroDto} from "../../../api/models/livro-dto";
import {LivroControllerService} from "../../../api/services/livro-controller.service";
import {LivroListaDto} from "../../../api/models/livro-lista-dto";

@Component({
  selector: 'app-list-livro',
  templateUrl: './list-livro.component.html',
  styleUrls: ['./list-livro.component.scss'],
})
export class ListLivroComponent implements OnInit {
  colunasMostrar = ['id', 'titulo', 'autor', 'ano', 'editora'];
  livroListaDataSource: MatTableDataSource<LivroDto> = new MatTableDataSource<LivroDto>();

  constructor(
    public livroService: LivroControllerService
    ){
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.livroService.listAll().subscribe(data => {
      this.livroListaDataSource.data = data;
    })
  }
}
