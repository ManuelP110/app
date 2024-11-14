import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosListadoPage } from './juegos-listado.page';

describe('JuegosListadoPage', () => {
  let component: JuegosListadoPage;
  let fixture: ComponentFixture<JuegosListadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
