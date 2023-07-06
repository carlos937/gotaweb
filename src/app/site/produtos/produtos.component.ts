import { Component } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.sass']
})
export class ProdutosComponent {
  produtos:any = []
  constructor(public service: ProdutoService) {}

  getArtistas(){
    this.service.buscarProjetos().subscribe((res) => {
      this.produtos = res;
    });
  }
}
