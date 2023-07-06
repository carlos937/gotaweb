import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) {}

  private createHeader(contentType: string): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      }),
    };
  }

  public buscarContato(): Observable<any>  {
    return this.http.get(
      environment.backUrl + 'contato',
      this.createHeader('application/json')
    );
  }

}
