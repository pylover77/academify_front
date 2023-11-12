import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AcademifyApiService {
  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  incluirAluno ( matricula: string, nome: string, nascimento: Date): Observable<any>{
    const incluirUrl= `${this.apiUrl}/incluir`
    const dataHoraCadastro = new Date().toLocaleString('pt-BR', {timeZone: 'UTC'})
    const body = {
      matricula: matricula,
      nome: nome,
      nascimento: nascimento,
      dataHoraCadastro: dataHoraCadastro,
    }
    return this.http.post<any>(incluirUrl,body)
  }
}
