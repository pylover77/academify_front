import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AlunosComponent } from './alunos/alunos.component';
import { IncluirAlunoComponent } from './incluir-aluno/incluir-aluno.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children: []
  },
  {
    path:'alunos', component: AlunosComponent
  },
  {
    path:'incluir-aluno', component: IncluirAlunoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
