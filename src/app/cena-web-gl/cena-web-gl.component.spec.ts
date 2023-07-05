import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenaWebGLComponent } from './cena-web-gl.component';

describe('CenaWebGLComponent', () => {
  let component: CenaWebGLComponent;
  let fixture: ComponentFixture<CenaWebGLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenaWebGLComponent]
    });
    fixture = TestBed.createComponent(CenaWebGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
