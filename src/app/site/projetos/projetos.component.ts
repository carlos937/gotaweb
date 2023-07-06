import { Component } from '@angular/core';
import { ProjetosService } from './projetos.service';

@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.sass']
})
export class ProjetosComponent {

  projetos: any[] = [];
  constructor(public service: ProjetosService) {}

  getArtistas(){
    this.service.buscarProjetos().subscribe((res) => {
      this.projetos = res;
    });
  }
}
