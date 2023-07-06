import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';

@Component({
  selector: 'contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass'],
})
export class ContatoComponent implements OnInit {
  contato: any;
  constructor(public service: ContatoService) {}

  ngOnInit(): void {
    this.getContato();
  }

  getContato() {
    this.service.buscarContato().subscribe((res) => {
      this.contato = res;
    });
  }

  ir(link: string) {
    window.location.href = link;
  }
}
