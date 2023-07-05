import { Injectable } from '@angular/core';
import { GUI } from 'dat.gui';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';

@Injectable({
  providedIn: 'root'
})
export class Site3dService {
  controls:OrbitControls;
  gui:GUI;
  scene:THREE.Scene;
  rendererCss:CSS3DRenderer;
  webGlRenderer:THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  options = {
    width: window.innerWidth,
    heigth: window.innerHeight,
    background: 0x000000,
  };
  constructor() { }

  init(element:any){
    this.scene = new THREE.Scene();
    this.rendererCss = new CSS3DRenderer();
    this.rendererCss.setSize(this.options.width, this.options.heigth);
    document.body.appendChild(this.rendererCss.domElement);
    this.webGlRenderer = new THREE.WebGLRenderer({ alpha: true });
    this.webGlRenderer.setSize(this.options.width, this.options.heigth);
    this.webGlRenderer.setClearColor(0x000000, 0);
    document.body.appendChild(this.webGlRenderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      50,
      this.options.width / this.options.heigth
    );
    this.camera.position.x = 0;
    this.camera.position.y = 51;
    this.camera.position.z = 1000;
    // const ligth = new THREE.HemisphereLight(0xffffff, 0x111111, 1.5);
    // scene.add(ligth);
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);
    const gridHelper = new THREE.GridHelper(100, 100);
    this.scene.add(gridHelper);

    this.controls = new OrbitControls(this.camera, this.rendererCss.domElement);
    const site = new CSS3DObject(element.nativeElement.children[0]);
    let container = document.getElementById("container-site");
    if(!container) return;
    container.style.width = (this.options.width ).toString()+"px";
     this.gui = new GUI();

    let canF = this.gui.addFolder('camera');
    canF.add(this.camera.position, 'x', -50, 50);
    canF.add(this.camera.position, 'y', -50, 50);
    canF.add(this.camera.position, 'z', -50, 50);

    let htmlF = this.gui.addFolder('html');
    htmlF.add(site.position, 'x', -50, 50);
    htmlF.add(site.position, 'y', -50, 50);
    htmlF.add(site.position, 'z', -50, 50);
    htmlF.add(site.rotation, 'x', -50, 50);
    htmlF.add(site.rotation, 'y', -50, 50);
    htmlF.add(site.rotation, 'z', -50, 50);

    let gui = this.gui;
    let controls = this.controls;
    let rendererCss = this.rendererCss;
    let webGlRenderer = this.webGlRenderer;
    this.scene.add(site);
    let scene = this.scene;
    let camera = this.camera;
    function animate() {
      gui.updateDisplay();
      requestAnimationFrame(animate);
      controls.update();
      rendererCss.render(scene, camera);
      webGlRenderer.render(scene, camera);
    }
    animate();
  }


  addClasses(){
    let inputs = document.getElementsByTagName('input');
    if (!inputs) return;
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('mouseover', () => {
        this.controls.enabled = false;
      });
      inputs[i].addEventListener('mouseout', () => {
        this.controls.enabled = true;
      });
    }

    let buttons = document.getElementsByTagName('button');
    if (!buttons) return;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('mouseover', () => {
        this.controls.enabled = false;
      });
      buttons[i].addEventListener('mouseout', () => {
        this.controls.enabled = true;
      });
    }
    let as = document.getElementsByTagName('a');
    if (!as) return;
    for (let i = 0; i < as.length; i++) {
      as[i].addEventListener('mouseover', () => {
        this.controls.enabled = false;
      });
      as[i].addEventListener('mouseout', () => {
        this.controls.enabled = true;
      });
    }
    let semControle = document.getElementsByClassName('semControle');
    if (!semControle) return;
    for (let i = 0; i < semControle.length; i++) {
      semControle[i].addEventListener('mouseover', () => {
        this.controls.enabled = false;
      });
      semControle[i].addEventListener('mouseout', () => {
        this.controls.enabled = true;
      });
    }
  }
}
