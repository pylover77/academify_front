import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AlunoTabela } from '../models/tabela.interface';
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  displayedColumns: string[] = ['matricula', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<AlunoTabela>();

  @ViewChild(MatPaginator, {static:true}) paginator?: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort?: MatSort;

  alunos: AlunoTabela[] = [
    { matricula: '001', nome: 'João' },
    { matricula: '002', nome: 'Maria' },
    // Adicione mais alunos conforme necessário
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.alunos;

    // Use a navegação segura ao acessar paginator e sort
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  excluirAluno(matricula: string): void {
    // Implemente a lógica de exclusão aqui
    console.log(`Excluir aluno com matrícula ${matricula}`);
  }

  editarAluno(matricula: string): void {
    // Implemente a lógica de edição aqui
    console.log(`Editar aluno com matrícula ${matricula}`);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
