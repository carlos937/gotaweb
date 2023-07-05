import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { WebGLService } from './web-gl.service';
import * as matrix from 'gl-matrix';
import { interval } from 'rxjs';

@Component({
  selector: 'cena-web-gl',
  templateUrl: './cena-web-gl.component.html',
  styleUrls: ['./cena-web-gl.component.sass']
})
export class CenaWebGLComponent implements AfterViewInit {
  @ViewChild('sceneCanvas') private canvas:  ElementRef;
  private _60fpsInterval = 16.666666666666666667;
  private gl: WebGLRenderingContext
  private cubeRotation = 0;
  private deltaTime = 0;
constructor(public webGLService:WebGLService){

}
  ngAfterViewInit(): void {
    if (!this.canvas) {
      alert('canvas not supplied! cannot bind WebGL context!');
      return;
    }
    let gl = this.webGLService.initialiseWebGLContext(
      this.canvas.nativeElement
    );
    if(gl == undefined) return;
    this.gl = gl;
    // Set up to draw the scene periodically via deltaTime.
    const milliseconds = 0.001;
    this.deltaTime = this._60fpsInterval * milliseconds;
    const drawSceneInterval = interval(this._60fpsInterval);
    drawSceneInterval.subscribe(() => {
      this.drawScene();
      this.deltaTime = this.deltaTime + (this._60fpsInterval * milliseconds);
    });
}


/**
 * Draws the scene
 */
private drawScene() {
  // prepare the scene and update the viewport
  this.webGLService.formatScene();

  // draw the scene
  const offset = 0;
  // 2 triangles, 3 vertices, 6 faces
  const vertexCount = 2 * 3 * 6;

  // translate and rotate the model-view matrix to display the cube
  const mvm = this.webGLService.getModelViewMatrix();
  matrix.mat4.translate(
      mvm,                    // destination matrix
      mvm,                    // matrix to translate
      [0.0, 0.0, -6.0]        // amount to translate
      );
  matrix.mat4.rotate(
      mvm,                    // destination matrix
      mvm,                    // matrix to rotate
      this.cubeRotation,      // amount to rotate in radians
      [1, 1, 1]               // rotate around X, Y, Z axis
  );

  this.webGLService.prepareScene();

  this.gl.drawArrays(
      this.gl.TRIANGLES,
      offset,
      vertexCount
  );

  // rotate the cube
  this.cubeRotation = this.deltaTime;
}

}
