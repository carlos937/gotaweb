import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import {
  CSS3DRenderer,
  CSS3DObject,
} from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { GUI } from 'dat.gui';
import { Site3dService } from './site3d.service';

@Component({
  selector: 'site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass'],
})
export class SiteComponent {
  pagAtiva = 'inicio';
  constructor(public element: ElementRef, public service: Site3dService) {}
  ngAfterViewInit(): void {
    this.service.init(this.element);
    this.service.addClasses();

  }
  escolherAba(pag: string) {
    this.pagAtiva = pag;
    setTimeout(() => {
      this.service.addClasses();
    }, 1000);
  }
}
