import { Component } from '@angular/core';

@Component({
  selector: 'contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass']
})
export class ContatoComponent {

  ir(link:string){
    window.location.href = link;
  }

}
