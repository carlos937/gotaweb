import { Component } from '@angular/core';
import { SobreService } from './sobre.service';

@Component({
  selector: 'sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.sass'],
})
export class SobreComponent {
  sobre: any;
  artistas:any[] = [];
  constructor(public service: SobreService) {}

  getSobre() {
    this.service.buscarSobre().subscribe((res) => {
      this.sobre = res;
    });
  }

  getArtistas(){
    this.service.buscarArtistas().subscribe((res) => {
      this.artistas = res;
    });
  }

}
